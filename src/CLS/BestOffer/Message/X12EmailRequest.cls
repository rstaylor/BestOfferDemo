Class BestOffer.Message.X12EmailRequest Extends (%Persistent, %XML.Adaptor)
{

Property Subject As %String;

Property Body As %String;

Property Comments As %String;

Storage Default
{
<Data name="EmailRequestDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>RequestID</Value>
</Value>
<Value name="3">
<Value>Status</Value>
</Value>
<Value name="4">
<Value>Subject</Value>
</Value>
<Value name="5">
<Value>Body</Value>
</Value>
<Value name="6">
<Value>Comments</Value>
</Value>
</Data>
<DataLocation>^BestOfferB362.X12EmailReq8C59D</DataLocation>
<IdLocation>^BestOfferB362.X12EmailReq8C59D</IdLocation>
<IndexLocation>^BestOfferB362.X12EmailReq8C59I</IndexLocation>
<StreamLocation>^BestOfferB362.X12EmailReq8C59S</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
