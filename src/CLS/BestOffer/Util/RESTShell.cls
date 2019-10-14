Class BestOffer.Util.RESTShell Extends %RegisteredObject
{

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
