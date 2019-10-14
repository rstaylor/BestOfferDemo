Class BestOffer.Message.NewItemRequest Extends Ens.Request
{

Property ItemID As %Integer;

Storage Default
{
<Data name="NewItemRequestDefaultData">
<Subscript>"NewItemRequest"</Subscript>
<Value name="1">
<Value>ItemID</Value>
</Value>
</Data>
<DefaultData>NewItemRequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
