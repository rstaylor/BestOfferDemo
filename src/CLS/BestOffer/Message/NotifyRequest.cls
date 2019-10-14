Class BestOffer.Message.NotifyRequest Extends Ens.Request
{

Property BidThreadID As %Integer;

Property Subject As %String(MAXLEN = 500);

Storage Default
{
<Data name="NotifyRequestDefaultData">
<Subscript>"NotifyRequest"</Subscript>
<Value name="1">
<Value>BidThreadID</Value>
</Value>
<Value name="2">
<Value>Subject</Value>
</Value>
</Data>
<DefaultData>NotifyRequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
