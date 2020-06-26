Class BestOffer.Message.BidThreadRequest Extends Ens.Request
{

Property Item As %Integer;

Property Buyer As %Integer;

Property Status As %String;

Storage Default
{
<Data name="BidThreadRequestDefaultData">
<Subscript>"BidThreadRequest"</Subscript>
<Value name="1">
<Value>Item</Value>
</Value>
<Value name="2">
<Value>Buyer</Value>
</Value>
<Value name="3">
<Value>Status</Value>
</Value>
</Data>
<DefaultData>BidThreadRequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
