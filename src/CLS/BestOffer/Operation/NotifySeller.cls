/// 
Class BestOffer.Operation.NotifySeller Extends Ens.BusinessOperation [ ClassType = "", ProcedureBlock ]
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
	set Sellername=ref.Item.Seller.Contact
	
	set email=ref.Item.Seller.EmailAddress
	
	Set tMailMessage=##class(%Net.MailMessage).%New()
	Do tMailMessage.To.Insert(email)
	Set tMailMessage.Subject=Sellername_", "_pRequest.Subject
	
	set tMailMessage.Charset="UTF-8"
	Set tSC=tMailMessage.TextData.WriteLine("ItemID: "_ref.Item.%Id())  Quit:$$$ISERR(tSC) tSC
	Set tSC=tMailMessage.TextData.WriteLine("Buyer contact: "_Buyername) Quit:$$$ISERR(tSC) tSC
	Set tSC=tMailMessage.TextData.WriteLine("Amount: $"_ref.BidAmount)  Quit:$$$ISERR(tSC) tSC
	///
	
	Set tSC=..Adapter.SendMail(tMailMessage)
	set pResponse.StringValue=tSC
	Quit tSC
}

}
