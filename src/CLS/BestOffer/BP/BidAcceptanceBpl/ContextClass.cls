Class BestOffer.BP.BidAcceptanceBpl.ContextClass Extends Ens.BP.Context
{

Property Action As %String(MAXLEN = 50);

Property BidAmount As %Float;

Property BidThreadID As %Integer;

Property ItemStatus As %String(MAXLEN = 50);

Property WFComments As %String(MAXLEN = 50);

Method CloseItem(pRequest) As %Status
{
 set ref=##class(BestOffer.Data.BidThread).%OpenId(pRequest.BidThreadID)
 set ref.Status="Closed"
 set tSC=ref.%Save()
 quit tSC
}

Storage Default
{
<Data name="ContextClassDefaultData">
<Subscript>"ContextClass"</Subscript>
<Value name="1">
<Value>Action</Value>
</Value>
<Value name="2">
<Value>BidAmount</Value>
</Value>
<Value name="3">
<Value>BidThreadID</Value>
</Value>
<Value name="4">
<Value>Status</Value>
</Value>
<Value name="5">
<Value>WFComments</Value>
</Value>
<Value name="6">
<Value>ItemStatus</Value>
</Value>
</Data>
<DefaultData>ContextClassDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
