/// This class is generated by the BestOffer.BP.CreateBiddingThreadBpl BPL class.
/// This class should not be edited or modified in any way.
/// Do not make direct use of this class in your application.
Class BestOffer.BP.CreateBiddingThreadBpl.Thread1 Extends Ens.BP.Thread [ ClassType = persistent, CompileAfter = BestOffer.BP.CreateBiddingThreadBpl, GeneratedBy = Ens.BPL.Compiler.CLS, ProcedureBlock ]
{

Method S1(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Set status=$$$OK,status=context.SaveToDB(request)
 If $$$ISERR(status) Quit
 Set status=$$$OK,context.BuyerEmailSubject="you have a new Item ready for bidding!"
 If $$$ISERR(status) Quit
 #; --- Begin Call Notify via Email ---
 #; --- Begin Request ---
 Set callrequest=##class(BestOffer.Message.NotifyRequest).%New()
 If '$IsObject(callrequest) Set status=%objlasterror Quit
 Set status=$$$OK,callrequest.BidThreadID=context.BidThreadID
 If $$$ISERR(status) Quit
 Set status=$$$OK,callrequest.Subject=context.BuyerEmailSubject
 If $$$ISERR(status) Quit
 Set status=..MakeAsyncCall("","Notify Buyer",callrequest,"Notify via Email",1,0,"Notify via Email",0)
 If $$$ISERR(status) Quit
 Kill callrequest
 #; --- End Request ---
 #; --- End Call Notify via Email ---
 Set ..%NextState="S2"
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S1") Goto Exit
}

Method S10(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 If (context.Action="Accept") {
 Set ..%NextState="S12"
 } elseif (context.Action="CounterBid") {
 Set ..%NextState="S15"
 } elseif (context.Action="Reject") {
 Set ..%NextState="S16"
 } else {
 Set ..%NextState="S17"
 }
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S10") Goto Exit
}

Method S11(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Set ..%NextState="S7"
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S11") Goto Exit
}

Method S12(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Set status=$$$OK,status=context.UpdateBidThreadFinal()
 If $$$ISERR(status) Quit
 #; --- Begin Call Buyer Acknowledgement ---
 #; --- Begin Request ---
 Set callrequest=##class(BestOffer.Message.BidAcceptanceRequest).%New()
 If '$IsObject(callrequest) Set status=%objlasterror Quit
 Set status=$$$OK,callrequest.BidThreadID=context.BidThreadID
 If $$$ISERR(status) Quit
 Set status=..MakeAsyncCall("","Bid Acceptance",callrequest,"Buyer Acknowledgement",1,0,"Buyer Acknowledgement",1)
 If $$$ISERR(status) Quit
 Kill callrequest
 #; --- End Request ---
 #; --- End Call Buyer Acknowledgement ---
 Do ..%PendingResponses.Clear(),..%SyncResponses.Clear()
 Set ..%SyncTimedOut=0,..%PendingTimeout="",..%PendingAlarmHandle="",..%SyncName=""
 If ..%Process.IsResponsePending("Buyer Acknowledgement") Do ..%PendingResponses.SetAt("","Buyer Acknowledgement")
 If ..%PendingResponses.Count()=0 {
    Set ..%NextState="S14"
 } else {
    Set ..%NextState="S13",..%Wait=1
 }
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S12") Goto Exit
}

Method S13(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 If ..%PendingResponses.Count()=0 {
    Set ..%NextState="S14"
 } else {
    Set ..%NextState="S13",..%Wait=1
 }
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S13") Goto Exit
}

Method S14(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Set ..%NextState="S11"
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S14") Goto Exit
}

Method S15(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Set status=$$$OK,context.BuyerEmailSubject="you have a counter bid for an Item!"
 If $$$ISERR(status) Quit
 #; --- Begin Call Notify via Email ---
 #; --- Begin Request ---
 Set callrequest=##class(BestOffer.Message.NotifyRequest).%New()
 If '$IsObject(callrequest) Set status=%objlasterror Quit
 Set status=$$$OK,callrequest.BidThreadID=context.BidThreadID
 If $$$ISERR(status) Quit
 Set status=$$$OK,callrequest.Subject="Your bid has been counterbid by the Seller!"
 If $$$ISERR(status) Quit
 Set status=..MakeAsyncCall("","Notify Buyer",callrequest,"Notify via Email",1,0,"Notify via Email",0)
 If $$$ISERR(status) Quit
 Kill callrequest
 #; --- End Request ---
 #; --- End Call Notify via Email ---
 Set ..%NextState="S11"
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S15") Goto Exit
}

Method S16(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Do ##class(Ens.Util.Trace).WriteTrace("user","BestOffer.BP.CreateBiddingThreadBpl","S16","Seller rejected Bid")
 Set status=$$$OK,context.BuyerEmailSubject="Seller has rejected a bid"
 If $$$ISERR(status) Quit
 #; --- Begin Call Notify via Email ---
 #; --- Begin Request ---
 Set callrequest=##class(BestOffer.Message.NotifyRequest).%New()
 If '$IsObject(callrequest) Set status=%objlasterror Quit
 Set status=$$$OK,callrequest.BidThreadID=context.BidThreadID
 If $$$ISERR(status) Quit
 Set status=$$$OK,callrequest.Subject=context.BuyerEmailSubject
 If $$$ISERR(status) Quit
 Set status=..MakeAsyncCall("","Notify Buyer",callrequest,"Notify via Email",1,0,"Notify via Email",0)
 If $$$ISERR(status) Quit
 Kill callrequest
 #; --- End Request ---
 #; --- End Call Notify via Email ---
 Set ..%NextState="S11"
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S16") Goto Exit
}

Method S17(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Do ##class(Ens.Util.Trace).WriteTrace("user","BestOffer.BP.CreateBiddingThreadBpl","S17","seller action="_context.Action)
 Set ..%NextState="S11"
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S17") Goto Exit
}

Method S18(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Set status=$$$OK,context.ItemStatus="Cancel"
 If $$$ISERR(status) Quit
 Set ..%NextState="S7"
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S18") Goto Exit
}

Method S2(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 If (",Cancel,Closed,"'[","_context.ItemStatus_",") {
  Set ..%NextState="S4"
 } else {
  Set ..%NextState="S3"
 }
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S2") Goto Exit
}

Method S3(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Do process.ClearAllPendingResponses()
 Set ..%NextState="Stop"
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S3") Goto Exit
}

Method S4(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 #; --- Begin Call Begin Buyer Bid Response ---
 #; --- Begin Request ---
 Set callrequest=##class(EnsLib.Workflow.TaskRequest).%New()
 If '$IsObject(callrequest) Set status=%objlasterror Quit
 Set status=$$$OK,callrequest.%Actions="Bid,Reject"
 If $$$ISERR(status) Quit
 Set status=$$$OK,callrequest.%Message="New Item notification"
 If $$$ISERR(status) Quit
 Set status=$$$OK,callrequest.%FormFields="ItemId,Item,SellerID,Value,Weight,OriginationZip,Counter Bid Amount,Bid Amount"
 If $$$ISERR(status) Quit
 Set status=callrequest.%FormValues.SetAt(##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.Seller.%Id(),"SellerID")
 If $$$ISERR(status) Quit
 Set status=callrequest.%FormValues.SetAt(##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.OriginationAddress.Zip,"OriginationZip")
 If $$$ISERR(status) Quit
 Set status=callrequest.%FormValues.SetAt(##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.Value,"Value")
 If $$$ISERR(status) Quit
 Set status=callrequest.%FormValues.SetAt(##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.Weight,"Weight")
 If $$$ISERR(status) Quit
 Set status=callrequest.%FormValues.SetAt(##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.%Id(),"ItemId")
 If $$$ISERR(status) Quit
 Set status=callrequest.%FormValues.SetAt(##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.Description,"Item")
 If $$$ISERR(status) Quit
 Set status=callrequest.%FormValues.SetAt(context.BidAmount,"Bid Amount")
 If $$$ISERR(status) Quit
 Set status=callrequest.%FormValues.SetAt(context.CounterBidAmount,"Counter Bid Amount")
 If $$$ISERR(status) Quit
 Set status=$$$OK,callrequest.%UserName=##class(BestOffer.Data.Buyer).%OpenId(request.Buyer).Contact
 If $$$ISERR(status) Quit
 Set status=..MakeAsyncCall("OnResponse1","Buyer Bid Response",callrequest,"Begin Buyer Bid Response",1,0,"Begin Buyer Bid Response",1)
 If $$$ISERR(status) Quit
 Kill callrequest
 #; --- End Request ---
 #; --- End Call Begin Buyer Bid Response ---
 Do ..%PendingResponses.Clear(),..%SyncResponses.Clear()
 Set ..%SyncTimedOut=0,..%PendingTimeout="",..%PendingAlarmHandle="",..%SyncName=""
 If ..%Process.IsResponsePending("Begin Buyer Bid Response") Do ..%PendingResponses.SetAt("","Begin Buyer Bid Response")
 If ..%PendingResponses.Count()=0 {
    Set ..%NextState="S6"
 } else {
    Set ..%NextState="S5",..%Wait=1
 }
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S4") Goto Exit
}

Method S5(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 If ..%PendingResponses.Count()=0 {
    Set ..%NextState="S6"
 } else {
    Set ..%NextState="S5",..%Wait=1
 }
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S5") Goto Exit
}

Method S6(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Set status=$$$OK,status=context.UpdateBidThread()
 If $$$ISERR(status) Quit
 If (context.Action="Bid") {
 Set ..%NextState="S8"
 } else {
 Set ..%NextState="S18"
 }
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S6") Goto Exit
}

Method S7(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Set ..%NextState="S2"
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S7") Goto Exit
}

Method S8(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 #; --- Begin Call Notify via Email ---
 #; --- Begin Request ---
 Set callrequest=##class(BestOffer.Message.NotifyRequest).%New()
 If '$IsObject(callrequest) Set status=%objlasterror Quit
 Set status=$$$OK,callrequest.BidThreadID=context.BidThreadID
 If $$$ISERR(status) Quit
 Set status=$$$OK,callrequest.Subject="you have a new bid on your Item!"
 If $$$ISERR(status) Quit
 Set status=..MakeAsyncCall("","Notify Seller",callrequest,"Notify via Email",1,0,"Notify via Email",0)
 If $$$ISERR(status) Quit
 Kill callrequest
 #; --- End Request ---
 #; --- End Call Notify via Email ---
 #; --- Begin Call Review Buyer Bid ---
 #; --- Begin Request ---
 Set callrequest=##class(EnsLib.Workflow.TaskRequest).%New()
 If '$IsObject(callrequest) Set status=%objlasterror Quit
 Set status=$$$OK,callrequest.%Actions="Accept,Reject,CounterBid"
 If $$$ISERR(status) Quit
 Set status=$$$OK,callrequest.%Message="Review Buyer's bid"
 If $$$ISERR(status) Quit
 Set status=$$$OK,callrequest.%FormFields="ItemId,Item,SellerID,Value,Weight,OriginationZip,Counter Bid Amount,Bid Amount"
 If $$$ISERR(status) Quit
 Set status=callrequest.%FormValues.SetAt(##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.Seller.%Id(),"SellerID")
 If $$$ISERR(status) Quit
 Set status=callrequest.%FormValues.SetAt(##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.OriginationAddress.Zip,"OriginationZip")
 If $$$ISERR(status) Quit
 Set status=callrequest.%FormValues.SetAt(##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.Value,"Value")
 If $$$ISERR(status) Quit
 Set status=callrequest.%FormValues.SetAt(##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.Weight,"Weight")
 If $$$ISERR(status) Quit
 Set status=$$$OK,callrequest.%UserName=##class(BestOffer.Data.Item).%OpenId(request.Item).Seller.Contact
 If $$$ISERR(status) Quit
 Set status=callrequest.%FormValues.SetAt(context.BidAmount,"Bid Amount")
 If $$$ISERR(status) Quit
 Set status=callrequest.%FormValues.SetAt(context.CounterBidAmount,"Counter Bid Amount")
 If $$$ISERR(status) Quit
 Set status=callrequest.%FormValues.SetAt(request.Item,"ItemId")
 If $$$ISERR(status) Quit
 Set status=callrequest.%FormValues.SetAt(##class(BestOffer.Data.Item).%OpenId(request.Item).Description,"Item")
 If $$$ISERR(status) Quit
 Set status=..MakeAsyncCall("OnResponse2","Review Buyer Bid",callrequest,"Review Buyer Bid",1,0,"Review Buyer Bid",1)
 If $$$ISERR(status) Quit
 Kill callrequest
 #; --- End Request ---
 #; --- End Call Review Buyer Bid ---
 Do ..%PendingResponses.Clear(),..%SyncResponses.Clear()
 Set ..%SyncTimedOut=0,..%PendingTimeout="",..%PendingAlarmHandle="",..%SyncName=""
 If ..%Process.IsResponsePending("Review Buyer Bid") Do ..%PendingResponses.SetAt("","Review Buyer Bid")
 If ..%PendingResponses.Count()=0 {
    Set ..%NextState="S10"
 } else {
    Set ..%NextState="S9",..%Wait=1
 }
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S8") Goto Exit
}

Method S9(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 If ..%PendingResponses.Count()=0 {
    Set ..%NextState="S10"
 } else {
    Set ..%NextState="S9",..%Wait=1
 }
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S9") Goto Exit
}

Storage Default
{
<Type>%Storage.Persistent</Type>
}

}