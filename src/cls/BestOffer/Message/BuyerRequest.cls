Class BestOffer.Message.BuyerRequest Extends Ens.Request
{

Property ItemId As %Integer;

Property BuyerID As %Integer;

Storage Default
{
<Data name="BuyerRequestDefaultData">
<Subscript>"BuyerRequest"</Subscript>
<Value name="1">
<Value>ItemId</Value>
</Value>
<Value name="2">
<Value>BuyerID</Value>
</Value>
</Data>
<DefaultData>BuyerRequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
