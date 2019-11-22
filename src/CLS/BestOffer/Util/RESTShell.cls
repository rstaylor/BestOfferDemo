Class BestOffer.Util.RESTShell Extends %CSP.REST
{

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>
		<!--
		<Route Url="/class/:namespace/:classname" Method="GET" Call="GetClass" Cors="true"/>
		<Map Prefix="/docserver" Forward="%Api.v1.DocServer"/>
		-->
		<Route Url="/items" Method="GET" Call="GetItems" Cors="true"/>
		<Route Url="/bidding" Method="PUT" Call="OpenBidding" Cors="true"/>
		<Route Url="/bidding" Method="POST" Call="NewOffering" Cors="true" />

</Routes>
}

ClassMethod SendRequest() As %Status
{
	#dim tSC as %Status
}

ClassMethod GetItems() As %Status
{
	set tSC = $$$OK

	Try {
		set %response.ContentType = "application/json"
			
		set sql = ##class(%SQL.Statement).%New()

		// get status query parameter
		set itemStatus = $get(%request.Data("status",1))
		set sqlCmd = "select ID from BestOffer_Data.Item"
		set:itemStatus'="" sqlCmd = sqlCmd_" where Status = ?"
		set sqlCmd = sqlCmd_" order by ID DESC"
		set sc = sql.%Prepare(.sqlCmd)
		throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)

		set retList = []

		if itemStatus = "" {
			set rs = sql.%Execute()
		} else {
			set rs = sql.%Execute(itemStatus)
		}

		while rs.%Next(.sc) {
			set ItemId = rs.%Get("ID")
			set ItemObj = ##class(BestOffer.Data.Item).%OpenId(ItemId)
			set sc = ItemObj.%JSONExportToString(.JSONStr)
			throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)
			set ItemJSON = {}.%FromJSON(JSONStr)
			set ItemJSON.ID = ItemId

			do retList.%Push(ItemJSON)
		}
		set retObject = {}
		set retObject.items = retList

		write retObject.%ToJSON()
	} Catch except {
		set tSC = except.AsStatus()
	}

	quit tSC
}

ClassMethod OpenBidding() As %Status
{
	#dim %request as %CSP.Request
	#dim %response as %CSP.Response
	#dim exception as %Exception.SystemException
	set tSC = $$$OK

	Try {
		if %request.ContentType '= "application/json" {
			set %response.Status = ..#HTTP406NOTACCEPTABLE // Return HTTP status indicating request is not acceptable
		} else {
			set requestData = {}.%FromJSON(%request.Content)
			set BidItemId = requestData.item
			set ItemSellerId = requestData.seller

			set BidItem = ##class(BestOffer.Data.Item).%OpenId(BidItemId,,.sc)
			if $$$ISERR(sc) {
				set %response.Status = ..#HTTP400BADREQUEST
				do $System.Status.DisplayError(sc)
				quit
			}
			set BidItem.Status="New"

			set Seller = ##class(BestOffer.Data.Seller).%OpenId(ItemSellerId,,.sc)
			if $$$ISERR(sc) {
				set %response.Status = ..#HTTP400BADREQUEST
				do $System.Status.DisplayError(sc)
				quit
			}
			set BidItem.Seller = Seller
			set sc=BidItem.%Save()
			throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)

			Set sc = ##class(Ens.Director).CreateBusinessService("New Item",.tService)
			throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)
			If ($IsObject(tService)) {
				Set tRequest = ##class(BestOffer.Message.NewItemRequest).%New()
				Set tRequest.ItemID=BidItem.%Id()

				Set sc = tService.ProcessInput(tRequest,.tStatus)
				
				throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)

				if $$$ISERR(tStatus) {
					set %response.Status = ..#HTTP400BADREQUEST
					do $System.Status.DisplayError(tStatus)
					quit
				}
			}
		}
	} Catch except{
		set tSC = except.AsStatus()
	}

	quit tSC
}

/// NewOffering is called to POST a new item for bidding.  Item can be entered in 
/// either a 'Pending' or 'New' status
ClassMethod NewOffering() As %Status
{
	#dim %request as %CSP.Request
	#dim %response as %CSP.Response
	#dim exception as %Exception.SystemException
	set tSC = $$$OK

	Try {
		if %request.ContentType '= "application/json" {
			set %response.Status = ..#HTTP406NOTACCEPTABLE // Return HTTP status indicating request is not acceptable
		} else {
			set requestData = {}.%FromJSON(%request.Content)
			set ItemSellerId = requestData.seller

			set Seller = ##class(BestOffer.Data.Seller).%OpenId(ItemSellerId,,.sc)
			if $$$ISERR(sc) {
				set %response.Status = ..#HTTP400BADREQUEST
				do $System.Status.DisplayError(sc)
				quit
			}

			set BidItem = ##class(BestOffer.Data.Item).%New()
			set BidItem.Seller = Seller
			set BidItem.RequestID = requestData.requestId
			set BidItem.InitialDate = $piece($horolog,",",1)
			set BidItem.InitialTime = $piece($horolog,",",2)
			set BidItem.Status = requestData.status
			set:BidItem.Status="" BidItem.Status = "Pending"
			set BidItem.OriginationAddress.Street = requestData.Address.street
			set BidItem.OriginationAddress.City = requestData.Address.city
			set BidItem.OriginationAddress.State = requestData.Address.state
			set BidItem.OriginationAddress.Zip = requestData.Address.zip
			set BidItem.OriginationAddress.Country = requestData.Address.country
			set BidItem.Description = requestData.description
			set BidItem.Value = requestData.value
			set BidItem.Weight = requestData.weight

			set sc=BidItem.%Save()
			throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)

			Set sc = ##class(Ens.Director).CreateBusinessService("New Item",.tService)
			throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)
			If ($IsObject(tService)) {
				Set tRequest = ##class(BestOffer.Message.NewItemRequest).%New()
				Set tRequest.ItemID=BidItem.%Id()

				Set sc = tService.ProcessInput(tRequest,.tStatus)
				
				throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)

				if $$$ISERR(tStatus) {
					set %response.Status = ..#HTTP400BADREQUEST
					do $System.Status.DisplayError(tStatus)
					quit
				}
			}
		}
	} Catch except{
		set tSC = except.AsStatus()
	}

	quit tSC
}

/// Fake REST service, hadrdcoded to send in ItemID=1
/// This would of course be the OID of the new Item that gets saved as part of the 
/// incoming REST service filing the JSON payload into the database 
ClassMethod NewItem() As %Status
{
		
	Set tSC = ##class(Ens.Director).CreateBusinessService("New Item",.tService)
	If ($IsObject(tService)) {
		
		//Hack the dummy Item object to user Seller #1
		set tItem=##class(BestOffer.Data.Item).%OpenId(1)
		set tItem.Status="New"
		//set tItem.ModifiedDate=+$h
		//set tItem.ModifiedTime=$p($h,",",2)
		set tItem.Seller= ##class(BestOffer.Data.Seller).%OpenId(1)
		set tSC=tItem.%Save()
		quit:$$$ISERR(tSC) tSC
		
	
		Set tRequest = ##class(BestOffer.Message.NewItemRequest).%New()
		Set tRequest.ItemID=1
		Set tSC = tService.ProcessInput(tRequest,.tStatus)
		//create JSON response based on success or failure in tStatus
		//return JSON response to invoking UI code
		}
	//TODO: cleaner status exit
	quit tSC
	
	
	
	
	
	//------------------------------------------------------------------------------------------------------------------
	///Rest code will look more like this....
		

	/*create request object containing JSON stream right  pNewItemObject
	
	*******stub*******
	*/
		
	
	Set tSC = ##class(Ens.Director).CreateBusinessService("New Item",.tService)
	If ($IsObject(tService)) {
		Set tRequest = ##class(BestOffer.Message.NewItemRequest).%New()
		Set tRequest.ItemStream=pNewItemObject
		Set tSC = tService.ProcessInput(tRequest,.tStatus)
		//create JSON response based on success or failure in tStatus
		//return JSON response to invoking UI code
		}
}

}
