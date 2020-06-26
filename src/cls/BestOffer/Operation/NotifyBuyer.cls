/// Sends emails based on EMail Adapter config settings and the property values of a Demo.Loan.Msg.SendReply request object
/// 
Class BestOffer.Operation.NotifyBuyer Extends Ens.BusinessOperation [ ClassType = "", ProcedureBlock ]
{

/// 2 modes: Queue, InProc
Parameter INVOCATION = "Queue";

/// Name of the adapter class
Parameter ADAPTER = "EnsLib.EMail.OutboundAdapter";

XData MessageMap
{
<MapItem MessageType="BestOffer.Message.NotifyRequest">
<Method>SendEmail</Method>
</MapItem>
}

/// Send an approval email to the applicant
Method SendEmail(pRequest As BestOffer.Message.NotifyRequest, Output pResponse As Ens.StringResponse) As %Status
{
	
	set pResponse=##class(Ens.StringResponse).%New()
	
	set ref=##class(BestOffer.Data.BidThread).%OpenId(pRequest.BidThreadID)
	set Buyername=ref.Buyer.Name
	set email=ref.Buyer.EmailAddress

	
	Set tMailMessage=##class(%Net.MailMessage).%New()
	Do tMailMessage.To.Insert(email)
	Set tMailMessage.Subject=ref.Buyer.Contact_", "_pRequest.Subject
	
	set tMailMessage.Charset="UTF-8"
	Set tSC=tMailMessage.TextData.WriteLine("ItemID: "_ref.Item.%Id())  Quit:$$$ISERR(tSC) tSC
	Set tSC=tMailMessage.TextData.WriteLine()
	Set tSC=tMailMessage.TextData.WriteLine("Item: "_ref.Item.Description)  Quit:$$$ISERR(tSC) tSC
	Set tSC=tMailMessage.TextData.WriteLine()
	Set tSC=tMailMessage.TextData.WriteLine("Weight: "_ref.Item.Weight_"lbs")
	Set tSC=tMailMessage.TextData.WriteLine()
	Set tSC=tMailMessage.TextData.WriteLine("Value: $"_ref.Item.Value)  Quit:$$$ISERR(tSC) tSC
	Set tSC=tMailMessage.TextData.WriteLine()
	Set tSC=tMailMessage.TextData.WriteLine("Location:"_" "_ref.Item.OriginationAddress.City_","_ref.Item.OriginationAddress.State_" "_ref.Item.OriginationAddress.Zip)  Quit:$$$ISERR(tSC) tSC
	Set tSC=tMailMessage.TextData.WriteLine()
	
	Set tSC=..Adapter.SendMail(tMailMessage)
	set pResponse.StringValue=tSC
	Quit tSC
}

}
