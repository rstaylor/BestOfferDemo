Class BestOffer.Data.Buyer Extends (%Persistent, %Populate, %JSON.Adaptor)
{

Property Name As %String(%JSONFIELDNAME = "name", MAXLEN = 50, POPSPEC = "Company()");

Property EmailAddress As %String(%JSONFIELDNAME = "emailAddress") [ InitialExpression = "BestOffer@gmail.com" ];

Property Active As %Boolean(%JSONFIELDNAME = "active") [ InitialExpression = 0 ];

Property Contact As %String(%JSONFIELDNAME = "contact", MAXLEN = 50, POPSPEC = "FirstName()");

Storage Default
{
<Data name="BuyerDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Name</Value>
</Value>
<Value name="3">
<Value>Active</Value>
</Value>
<Value name="4">
<Value>EmailAddress</Value>
</Value>
<Value name="5">
<Value>Contact</Value>
</Value>
</Data>
<DataLocation>^BestOffer.Data.BuyerD</DataLocation>
<DefaultData>BuyerDefaultData</DefaultData>
<ExtentSize>10</ExtentSize>
<IdLocation>^BestOffer.Data.BuyerD</IdLocation>
<IndexLocation>^BestOffer.Data.BuyerI</IndexLocation>
<Property name="%%CLASSNAME">
<AverageFieldSize>1</AverageFieldSize>
<Selectivity>100.0000%</Selectivity>
</Property>
<Property name="%%ID">
<AverageFieldSize>1.1</AverageFieldSize>
<Selectivity>1</Selectivity>
</Property>
<Property name="Active">
<AverageFieldSize>1</AverageFieldSize>
<Selectivity>100.0000%</Selectivity>
</Property>
<Property name="Contact">
<AverageFieldSize>6</AverageFieldSize>
<Selectivity>10.0000%</Selectivity>
</Property>
<Property name="EmailAddress">
<AverageFieldSize>19</AverageFieldSize>
<Selectivity>100.0000%</Selectivity>
</Property>
<Property name="Name">
<AverageFieldSize>16.7</AverageFieldSize>
<Selectivity>10.0000%</Selectivity>
</Property>
<SQLMap name="IDKEY">
<BlockCount>-4</BlockCount>
</SQLMap>
<StreamLocation>^BestOffer.Data.BuyerS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
