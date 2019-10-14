Class BestOffer.BP.CreateBiddingThreadBpl.ContextClass Extends Ens.BP.Context
{

Property Action As %String(MAXLEN = 50);

Property BidAmount As %Float;

Property BidThreadID As %Integer;

Property CounterBidAmount As %Library.Float;

Property ItemStatus As %String(MAXLEN = 50);

Property WFComments As %String(MAXLEN = 50);

Method SaveToDB(pRequest) As %Status
{
 set ref=##class(BestOffer.Data.BidThread).%New()
 set ref.Buyer=##class(BestOffer.Data.Buyer).%OpenId(pRequest.Buyer)
 set ref.Item=##class(BestOffer.Data.Item).%OpenId(pRequest.Item)
 set ..ItemStatus=ref.%Save()
 set ..BidThreadID=ref.%Id()
 quit ..ItemStatus
}

Method UpdateBidThread() As %Status
{
 set ref=##class(BestOffer.Data.BidThread).%OpenId(..BidThreadID)
 set ref.Status=..Action
 set ref.BidAmount=..BidAmount
 set tSC=ref.%Save()
 quit tSC
}

Method UpdateBidThreadFinal() As %Status
{
 set ref=##class(BestOffer.Data.BidThread).%OpenId(..BidThreadID)
 set ref.FinalBidAmount=..BidAmount
 set tSC=ref.%Save()
 set ..ItemStatus="Closed"
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
<Value>CounterBidAmount</Value>
</Value>
<Value name="5">
<Value>Status</Value>
</Value>
<Value name="6">
<Value>WFComments</Value>
</Value>
<Value name="7">
<Value>ItemStatus</Value>
</Value>
</Data>
<DefaultData>ContextClassDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
