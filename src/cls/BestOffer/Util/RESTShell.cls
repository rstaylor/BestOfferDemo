Include EnsConstants

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
		<Route Url="/items/open" Method="PUT" Call="OpenBidding" Cors="true"/>
		<Route Url="/items/new" Method="POST" Call="NewOffering" Cors="true" />
		<Route Url="/items/bids" Method="GET" Call="GetItemBids" Cors="true"/>
		<Route Url="/users" Method="GET" Call="GetUsers" Cors="true"/>
		<Route Url="/bids/:userID" Method="GET" Call="GetBidsForUser" Cors="true"/>
		<Route Url="/bids/:taskid" Method="PUT" Call="UpdateBid" Cors="true"/>
</Routes>
}

ClassMethod SendRequest() As %Status
{
	#dim tSC as %Status
}

ClassMethod GetUsers() As %Status
{
	set tSC = $$$OK
	set userTypeDef = $Listbuild("BUYER", "SELLER")
	Try {
		set %response.ContentType = "application/json"

		set Active = $Get(%request.Data("Active",1))+0

		set sql = ##class(%SQL.Statement).%New()

		set sqlCmd = "select ID,Contact,'buyer' as Type from BestOffer_Data.Buyer"
		set:Active sqlCmd = sqlCmd_" where Active = 1"
		set sqlCmd = sqlCmd_" union select ID,Contact,'seller' as Type from BestOffer_Data.Seller"
		set:Active sqlCmd = sqlCmd_" where Active = 1"
		set sqlCmd = sqlCmd_" order by Contact"

		set sc = sql.%Prepare(.sqlCmd)
		throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)

		set retList = []

		set rs = sql.%Execute()

		while rs.%Next(.sc) {
			set ItemId = rs.%Get("ID")
			set userType = rs.%Get("Type")

			if $ZConvert(userType,"U") = "BUYER" {
				set ItemObj = ##class(BestOffer.Data.Buyer).%OpenId(ItemId)
			} else {
				set ItemObj = ##class(BestOffer.Data.Seller).%OpenId(ItemId)
			}

			set sc = ItemObj.%JSONExportToString(.JSONStr)
			throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)
			
			set ItemJSON = {}.%FromJSON(JSONStr)
			set ItemJSON.userID = ItemId
			set ItemJSON.type = userType

			do retList.%Push(ItemJSON)
		}
		#; set retObject = {}
		#; set retObject.users = retList

		#; write retObject.%ToJSON()
		write retList.%ToJSON()
	} Catch except {
		set tSC = except.AsStatus()
	}

	quit tSC
}

ClassMethod UpdateBid(taskID As %String) As %Status
{
	set tSC = $$$OK

	Try {
		set %response.ContentType = "application/json"

		set bidtask = ##class(EnsLib.Workflow.TaskResponse).%OpenId(taskID,.sc)
		throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)

		set update = {}.%FromJSON(%request.Content)

		set action = update.Action
		set fvIter = update.FormValues.%GetIterator()
		while fvIter.%GetNext(.formField,.formValue) {
			set sc = bidtask.%FormValues.SetAt(formValue, formField)
			throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)
		}

		set tSC = bidtask.CompleteTask(action)
		throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)
	} Catch except {
		set tSC = except.AsStatus()
	}

	quit tSC
}

ClassMethod GetBidsForUser(UserID As %String) As %Status
{
	set tSC = $$$OK

	Try {
		set %response.ContentType = "application/json"

		set sql = ##class(%SQL.Statement).%New()

		set sqlCmd = "select Task from EnsLib_Workflow.Worklist where UserName = ?"
		set sc = sql.%Prepare(.sqlCmd)
		throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)

		set retList = []

		set rs = sql.%Execute(UserID)
		while rs.%Next(.sc) {
			set TaskID = rs.%Get("Task")

			set TaskDef = ##class(EnsLib.Workflow.TaskResponse).%OpenId(TaskID,.sc)
			throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)

			set TaskObj = {}
			set actions = []

			set actionslist = $Listfromstring(TaskDef.%Actions,",")
			for idx = 1:1:$Listlength(actionslist) {
				do actions.%Push($list(actionslist,idx))
			}
			set TaskObj.Actions = actions
			set TaskObj.Action = TaskDef.%Action
			set TaskObj.Status = TaskDef.%Status
			set TaskObj.Title = TaskDef.%Message
			set formKey = ""
			set idx = 0

			while 1 {
				set idx = idx + 1
				set formKey = TaskDef.%FormValues.Next(.formKey)
				quit:formKey=""

				do TaskObj.%Set($zstrip($zconvert(formKey,"W"),"*W"),TaskDef.%FormValues.GetAt(formKey))
			}
			set TaskObj.ID = TaskID
			do retList.%Push(TaskObj)
		}
		#; set retObject = {}
		#; set retObject.BidTasks = retList

		#; write retObject.%ToJSON()
		write retList.%ToJSON()
	} Catch except {
		set tSC = except.AsStatus()
	}

	quit tSC
}

ClassMethod GetItemBids() As %Status
{
	set tSC = $$$OK

	Try {
		set %response.ContentType = "application/json"
			
		set sql = ##class(%SQL.Statement).%New()

		// get status query parameter
		set ItemID = $get(%request.Data("item",1))
		set sqlCmd = "SELECT ID FROM BestOffer_Data.BidThread where Item = ?"
		set sqlCmd = sqlCmd_" order by Buyer->Name"
		set sc = sql.%Prepare(.sqlCmd)
		throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)

		set retList = []

		set rs = sql.%Execute(ItemID)

		while rs.%Next(.sc) {
			set BidThreadID = rs.%Get("ID")
			set BidThObj = ##class(BestOffer.Data.BidThread).%OpenId(BidThreadID)
			set sc = BidThObj.%JSONExportToString(.JSONStr)
			throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)
			set ItemJSON = {}.%FromJSON(JSONStr)
			set ItemJSON.ID = BidThreadID
			set ItemJSON.BuyerID = BidThObj.Buyer.%Id()
			set ItemJSON.ItemID = ItemID

			do retList.%Push(ItemJSON)
		}
		#; set retObject = {}
		#; set retObject.biditems = retList

		#; write retObject.%ToJSON()
		write retList.%ToJSON()
	} Catch except {
		set tSC = except.AsStatus()
	}

	quit tSC
}

ClassMethod GetItems() As %Status
{
	set tSC = $$$OK

	Try {
		set %response.ContentType = "application/json"
			
		set sql = ##class(%SQL.Statement).%New()

		// get status query parameter
		set itemStatus = $get(%request.Data("status",1))
		set sellerId = $get(%request.Data("seller",1))
		set sqlCmd = "select ID from BestOffer_Data.Item"
		
		if $data(%request.Data) {
			set whereclause = "where"
			set:sellerId'="" whereclause = whereclause_" Seller = '"_sellerId_"'"
			if (itemStatus'="") {
				set:whereclause'="where" whereclause = whereclause_" and"
				set whereclause = whereclause_" Status = '"_itemStatus_"'"
			}
			set sqlCmd = sqlCmd_" "_whereclause		
		}
		set sqlCmd = sqlCmd_" order by ID DESC"
		set sc = sql.%Prepare(.sqlCmd)
		throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)

		set retList = []

		#; if itemStatus = "" {
			set rs = sql.%Execute()
		#; } else {
		#; 	set rs = sql.%Execute(itemStatus)
		#; }

		while rs.%Next(.sc) {
			set ItemId = rs.%Get("ID")
			set ItemObj = ##class(BestOffer.Data.Item).%OpenId(ItemId)
			set sc = ItemObj.%JSONExportToString(.JSONStr)
			throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)
			set ItemJSON = {}.%FromJSON(JSONStr)
			set ItemJSON.ID = ItemId
			set ItemJSON.SellerId = ItemObj.Seller.%Id()

			do retList.%Push(ItemJSON)
		}
		#; set retObject = {}
		#; set retObject.items = retList

		#; write retObject.%ToJSON()
		write retList.%ToJSON()
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
			set sc = BidItem.%JSONExportToString(.JSONStr)
			throw:$$$ISERR(sc) ##class(%Exception.StatusException).CreateFromStatus(sc)
			set ItemJSON = {}.%FromJSON(JSONStr)
			set ItemJSON.ID = BidItem.%Id()
			set ItemJSON.SellerId = BidItem.Seller.%Id()

			#; set responseBody = {}
			#; set responseBody.ItemId = BidItem.%Id()
			write ItemJSON.%ToJSON()
		}
	} Catch except{
		set tSC = except.AsStatus()
	}

	quit tSC
}

ClassMethod OnPreDispatch(pUrl As %String, pMethod As %String, ByRef pContinue As %Boolean) As %Status
{
	Set tSC=##class(Ens.Director).GetProductionStatus(.tProductionName,.tState)
 	if $system.Status.IsOK(tSC) {
		If tState'=$$$eProductionStateRunning {
			set tSC = $System.Status.Error(999,"Production is not running")
			set pContinue = 0
		}
	}	
 	
	quit tSC
}

}
