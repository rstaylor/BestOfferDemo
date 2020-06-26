/// Sends emails based on EMail Adapter config settings and the property values of a Demo.Loan.Msg.SendReply request object
/// 
Class BestOffer.Operation.X12EmailNotification Extends Ens.BusinessOperation [ ClassType = "", ProcedureBlock ]
{

/// 2 modes: Queue, InProc
Parameter INVOCATION = "Queue";

/// Name of the adapter class
Parameter ADAPTER = "EnsLib.EMail.OutboundAdapter";

Parameter SETTINGS = "EmailAddresses";

/// Could also use the default settings from the adapter
Property EmailAddresses As %String;

XData MessageMap
{
<MapItem MessageType="BestOffer.Message.X12EmailRequest">
<Method>SendEmail</Method>
</MapItem>
}

/// Send an approval email to the applicant
Method SendEmail(pRequest As BestOffer.Message.X12EmailRequest, Output pResponse As Ens.StringResponse) As %Status
{
	set pResponse=##class(Ens.StringResponse).%New()
	
	If ..EmailAddresses="" $$$TRACE("no email addresses set up.") Quit $$$OK
	///$$$TRACE("send email to "_..EmailAddresses)
	
	Set tMailMessage=##class(%Net.MailMessage).%New()
	Do tMailMessage.To.Insert(..EmailAddresses)
	Set tMailMessage.Subject=pRequest.Subject
	//"204 message arrived with controlid="_pRequest.RequestID	
	set tMailMessage.Charset="UTF-8"
	Set tSC=tMailMessage.TextData.WriteLine(pRequest.Body)  Quit:$$$ISERR(tSC) tSC
	Set tSC=tMailMessage.TextData.WriteLine()
	Set tSC=tMailMessage.TextData.WriteLine("Comments:"_pRequest.Comments)  Quit:$$$ISERR(tSC) tSC
	///
	
	Set tSC=..Adapter.SendMail(tMailMessage)
	//set ^andre($i(^andre),"mail response")=tSC
	set pResponse.StringValue=tSC
	Quit tSC
}

}
