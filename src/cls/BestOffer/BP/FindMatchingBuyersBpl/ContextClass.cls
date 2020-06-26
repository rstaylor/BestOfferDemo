Class BestOffer.BP.FindMatchingBuyersBpl.ContextClass Extends Ens.BP.Context
{

Property AtEnd As %Boolean [ InitialExpression = 0 ];

Property CutoffTimeLimit As %TimeStamp;

Property ResultSet As %SQL.StatementResult;

Property SiteWideDiscountRate As %Integer;

Method ExecuteDBQuery() As %Status
{
 set strSQL = "SELECT ID as BuyerID, * FROM BestOffer_Data.Buyer WHERE active=1"
 set ..ResultSet= ##class(%SQL.Statement).%ExecDirect(,strSQL)
 if ..ResultSet.%SQLCODE'=0,..ResultSet.%SQLCODE'=100 {
	 set tSC=$$$ERROR($$$GeneralError,..ResultSet.%Message)
	
	 }
 Else {
	 set tSC=$$$OK
	  }

 quit tSC
}

Storage Default
{
<Data name="ContextClassDefaultData">
<Subscript>"ContextClass"</Subscript>
<Value name="1">
<Value>AtEnd</Value>
</Value>
<Value name="2">
<Value>CutoffTimeLimit</Value>
</Value>
<Value name="3">
<Value>ResultSet</Value>
</Value>
<Value name="4">
<Value>SiteWideDiscountRate</Value>
</Value>
</Data>
<DefaultData>ContextClassDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
