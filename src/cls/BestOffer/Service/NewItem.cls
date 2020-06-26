Class BestOffer.Service.NewItem Extends Ens.BusinessService
{

/// Shows how to add custom settings to a business component. Not actually used in this business service
Parameter SETTINGS = "Delay";

Property Delay As %String [ InitialExpression = "22" ];

Parameter ADAPTER;

// "Ens.InboundAdapter";

Method OnProcessInput(pInput As BestOffer.Message.NewItemRequest, Output pStatus As %RegisteredObject) As %Status
{
	w !
	set tSC=$$$OK  
	
	//Your code will pull part JSON, validate, persist into database, which generates a ItemID
	
	//if Item save fails, return failure status to invoking REST code
	//set pStatus="failure on save" or something
	//quit $$$OK
	
	//do other stuff

	///How to grab the value of a custom setting. Not actually used in this business service
	set tDelay=..Delay
   	
   	
   	//send ItemID request to Business Process
	Set tSC=..SendRequestAsync("Find Matching Buyers",pInput) 
	set pStatus=$$$OK

    Quit tSC
}

}
