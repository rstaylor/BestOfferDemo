Class BestOffer.Message.BidAcceptanceRequest Extends Ens.Request
{

Property BidThreadID As %Integer;

Storage Default
{
<Data name="BidAcceptanceRequestDefaultData">
<Subscript>"BidAcceptanceRequest"</Subscript>
<Value name="1">
<Value>BidThreadID</Value>
</Value>
</Data>
<DefaultData>BidAcceptanceRequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
