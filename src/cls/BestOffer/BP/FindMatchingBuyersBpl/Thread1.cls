/// This class is generated by the BestOffer.BP.FindMatchingBuyersBpl BPL class.
/// This class should not be edited or modified in any way.
/// Do not make direct use of this class in your application.
Class BestOffer.BP.FindMatchingBuyersBpl.Thread1 Extends Ens.BP.Thread [ ClassType = persistent, CompileAfter = BestOffer.BP.FindMatchingBuyersBpl, GeneratedBy = Ens.BPL.Compiler.CLS, ProcedureBlock ]
{

Method S1(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Set status=$$$OK,context.CutoffTimeLimit=##class(BestOffer.Util.Utils).CalcTimeLimit(process.TimeLimit)
 If $$$ISERR(status) Quit
 Set context.%Process = process
 Set status=##class(Ens.Rule.RuleDefinition).EvaluateRulesEx("BestOffer.Rule.DiscountRule",,context,"DiscountRate",.ruleReturn,.ruleReason,,process.RuleLogging)  Quit:$$$ISERR(status)
 Set context.SiteWideDiscountRate = ruleReturn
 Do ##class(Ens.Util.Trace).WriteTrace("user","BestOffer.BP.FindMatchingBuyersBpl","S1","Discount Rate: "_context.SiteWideDiscountRate_"%")
 Set ..%NextState="S2"
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S1") Goto Exit
}

Method S10(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 #; --- Begin Call Create Bidding Thread ---
 #; --- Begin Request ---
 Set callrequest=##class(BestOffer.Message.BidThreadRequest).%New()
 If '$IsObject(callrequest) Set status=%objlasterror Quit
 Set status=$$$OK,callrequest.Buyer=context.ResultSet.BuyerID
 If $$$ISERR(status) Quit
 Set status=$$$OK,callrequest.Item=request.ItemID
 If $$$ISERR(status) Quit
 Set status=..MakeAsyncCall("","Create Bidding Thread",callrequest,"Create Bidding Thread",1,0,"Create Bidding Thread",0)
 If $$$ISERR(status) Quit
 Kill callrequest
 #; --- End Request ---
 #; --- End Call Create Bidding Thread ---
 Set ..%NextState="S8"
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S10") Goto Exit
}

Method S11(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Set ..%NextState="S5"
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S11") Goto Exit
}

Method S12(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Set status=$$$OK,context.AtEnd=1
 If $$$ISERR(status) Quit
 Set ..%NextState="S11"
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S12") Goto Exit
}

Method S13(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Set %name="",%alarmhandle=""
 Set status=..%Process.MakeTimerCall("_Delay",.%name,process.Delay,"",.%alarmhandle,"Pause execution before retry",0)
 If $$$ISERR(status) Quit
 Do ..%PendingResponses.Clear(),..%SyncResponses.Clear()
 Set ..%SyncTimedOut=0,..%PendingTimeout="",..%PendingAlarmHandle="",..%SyncName=""
 For tI=1:1:$Length(%name,",") {
    If ..%Process.IsResponsePending($Piece(%name,",",tI)) Do ..%PendingResponses.SetAt("",$Piece(%name,",",tI))
 }
 If ..%PendingResponses.Count()=0 {
    Set ..%NextState="S15"
 } else {
    Set ..%NextState="S14",..%Wait=1
 }
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S13") Goto Exit
}

Method S14(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 If ..%PendingResponses.Count()=0 {
    Set ..%NextState="S15"
 } else {
    Set ..%NextState="S14",..%Wait=1
 }
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S14") Goto Exit
}

Method S15(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Set ..%NextState="S11"
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S15") Goto Exit
}

Method S2(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 If (context.AtEnd=0) {
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
 If (##class(BestOffer.Data.Item).GetStatus(request.ItemID)="Closed") {
 Set ..%NextState="S6"
 } else {
 Set ..%NextState="S7"
 }
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S4") Goto Exit
}

Method S5(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Set ..%NextState="S2"
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S5") Goto Exit
}

Method S6(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Set status=$$$OK,context.AtEnd=1
 If $$$ISERR(status) Quit
 Set ..%NextState="S5"
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S6") Goto Exit
}

Method S7(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 Set status=$$$OK,status=context.ExecuteDBQuery()
 If $$$ISERR(status) Quit
 Set ..%NextState="S8"
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S7") Goto Exit
}

Method S8(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 If (context.ResultSet.%Next()=1) {
  Set ..%NextState="S10"
 } else {
  Set ..%NextState="S9"
 }
 } while (0)
Exit Quit ..ManageState(status)
Trap Set $ZT="",status=..ManageStatus(status,"S8") Goto Exit
}

Method S9(process As Ens.BusinessProcess, context As Ens.BP.Context, synctimedout As %Boolean, syncresponses As %ArrayOfObjects(ELEMENTTYPE="%Library.Persistent"), request As %Library.Persistent, response As %Library.Persistent) As %Status [ Language = objectscript, PublicList = (process, context) ]
{
 Set $ZT="Trap",status=$$$OK do {
 If (context.CutoffTimeLimit]$zdatetime($horolog,3)) {
 Set ..%NextState="S12"
 } else {
 Set ..%NextState="S13"
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
