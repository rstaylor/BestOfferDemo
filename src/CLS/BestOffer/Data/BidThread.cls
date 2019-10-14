Class BestOffer.Data.BidThread Extends %Persistent
{

Property Buyer As BestOffer.Data.Buyer;

Property Item As BestOffer.Data.Item;

Property Status As %String;

Property BidAmount As %Float;

Property FinalBidAmount As %Float;

Storage Default
{
<Data name="BidThreadDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Buyer</Value>
</Value>
<Value name="3">
<Value>Item</Value>
</Value>
<Value name="4">
<Value>Status</Value>
</Value>
<Value name="5">
<Value>BidAmount</Value>
</Value>
<Value name="6">
<Value>FinalBidAmount</Value>
</Value>
</Data>
<DataLocation>^BestOffer.Data.BidThreadD</DataLocation>
<DefaultData>BidThreadDefaultData</DefaultData>
<IdLocation>^BestOffer.Data.BidThreadD</IdLocation>
<IndexLocation>^BestOffer.Data.BidThreadI</IndexLocation>
<StreamLocation>^BestOffer.Data.BidThreadS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
