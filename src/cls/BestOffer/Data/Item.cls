Class BestOffer.Data.Item Extends (%Persistent, %XML.Adaptor, %Populate, %JSON.Adaptor)
{

Index IDkey On RequestID [ Unique ];

Property Seller As BestOffer.Data.Seller;

Property RequestID As %Integer;

Property InitialDate As %Date;

Property InitialTime As %Time;

Property ModifiedDate As %Date(MINVAL = 64391);

Property ModifiedTime As %Time;

Property OriginationAddress As BestOffer.Data.Address;

/// Just used for dummy populate data
Property Status As %String [ InitialExpression = "Closed" ];

Property Value As %Float [ InitialExpression = {##class(%PopulateUtils).Float(500,10000,2)} ];

Property Description As %String [ InitialExpression = {##class(%PopulateUtils).Color()_" "_##class(%PopulateUtils).Product()} ];

Property FinalBidAmount As %Float(MAXVAL = 99999, MINVAL = 0, SCALE = 2);

Property Weight As %Integer(MAXVAL = 300, MINVAL = 1);

/// Return Item status
ClassMethod GetStatus(pItemID) As %String
{
	quit ..%OpenId(pItemID).Status
}

/// Update the database called from X12 BP
ClassMethod UpdateDB(pObject As BestOffer.Data.Item) As %Status
{
	///Check if Item already existing
	new SQLCODE
	&sql(select %id into :existingid from BestOffer_Data.Item where requestid=:pObject.RequestID)
	if SQLCODE=100 {                   ///end of set, so new Item
		set stat=pObject.%Save()
	}
	else {                             ///this is an update to an existing Item
		set existingobject=..%OpenId(existingid)
		set existingobject.ModifiedDate=+$Horolog
		set existingobject.ModifiedTime=$p($horolog,",",2)
		set stat=existingobject.%Save()
		If $$$ISERR(stat) {
				}
	}
	quit stat
}

Storage Default
{
<Data name="ItemDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>InitialDate</Value>
</Value>
<Value name="3">
<Value>InitialTime</Value>
</Value>
<Value name="4">
<Value>ModifiedDate</Value>
</Value>
<Value name="5">
<Value>ModifiedTime</Value>
</Value>
<Value name="6">
<Value>Street</Value>
</Value>
<Value name="7">
<Value>City</Value>
</Value>
<Value name="8">
<Value>State</Value>
</Value>
<Value name="9">
<Value>Zip</Value>
</Value>
<Value name="10">
<Value>Country</Value>
</Value>
<Value name="11">
<Value>Status</Value>
</Value>
<Value name="12">
<Value>RequestID</Value>
</Value>
<Value name="13">
<Value>OrderAmount</Value>
</Value>
<Value name="14">
<Value>Seller</Value>
</Value>
<Value name="15">
<Value>FinalBidAmount</Value>
</Value>
<Value name="16">
<Value>OriginationAddress</Value>
</Value>
<Value name="18">
<Value>Weight</Value>
</Value>
<Value name="19">
<Value>Value</Value>
</Value>
<Value name="20">
<Value>Description</Value>
</Value>
</Data>
<DataLocation>^BestOffer.Data.ItemD</DataLocation>
<DefaultData>ItemDefaultData</DefaultData>
<ExtentSize>20</ExtentSize>
<IdLocation>^BestOffer.Data.ItemD</IdLocation>
<IndexLocation>^BestOffer.Data.ItemI</IndexLocation>
<Property name="%%CLASSNAME">
<AverageFieldSize>1</AverageFieldSize>
<Selectivity>100.0000%</Selectivity>
</Property>
<Property name="%%ID">
<AverageFieldSize>1.55</AverageFieldSize>
<Selectivity>1</Selectivity>
</Property>
<Property name="City">
<AverageFieldSize>7.4</AverageFieldSize>
<Selectivity>11.1111%</Selectivity>
</Property>
<Property name="Country">
<AverageFieldSize>3</AverageFieldSize>
<Selectivity>100.0000%</Selectivity>
</Property>
<Property name="Description">
<AverageFieldSize>7.6</AverageFieldSize>
<Selectivity>7.6923%</Selectivity>
</Property>
<Property name="FinalBidAmount">
<AverageFieldSize>7.8</AverageFieldSize>
<Selectivity>5.0000%</Selectivity>
</Property>
<Property name="InitialDate">
<AverageFieldSize>5</AverageFieldSize>
<Selectivity>11.1111%</Selectivity>
</Property>
<Property name="InitialTime">
<AverageFieldSize>5</AverageFieldSize>
<Selectivity>5.0000%</Selectivity>
</Property>
<Property name="ModifiedDate">
<AverageFieldSize>5</AverageFieldSize>
<Selectivity>5.2632%</Selectivity>
</Property>
<Property name="ModifiedTime">
<AverageFieldSize>4.95</AverageFieldSize>
<Selectivity>5.0000%</Selectivity>
</Property>
<Property name="OrderAmount">
<AverageFieldSize>6.6</AverageFieldSize>
<Selectivity>10.0000%</Selectivity>
</Property>
<Property name="OriginationAddress">
<AverageFieldSize>43.65,City:7,Country:3,Residence:1,State:2,Street:16.7,Zip:5</AverageFieldSize>
<Selectivity>5.0000%,City:8.3333%,Country:100.0000%,Residence:50.0000%,State:6.6667%,Street:5.0000%,Zip:5.0000%</Selectivity>
</Property>
<Property name="RequestID">
<AverageFieldSize>8.85</AverageFieldSize>
<Selectivity>1</Selectivity>
</Property>
<Property name="Seller">
<AverageFieldSize>1.05</AverageFieldSize>
<Selectivity>10.0000%</Selectivity>
</Property>
<Property name="State">
<AverageFieldSize>2</AverageFieldSize>
<Selectivity>10.0000%</Selectivity>
</Property>
<Property name="Status">
<AverageFieldSize>5.85</AverageFieldSize>
<OutlierSelectivity>.95:"Closed"</OutlierSelectivity>
<Selectivity>5.0000%</Selectivity>
</Property>
<Property name="Street">
<AverageFieldSize>16.9</AverageFieldSize>
<Selectivity>10.0000%</Selectivity>
</Property>
<Property name="Value">
<AverageFieldSize>6.8</AverageFieldSize>
<Selectivity>5.0000%</Selectivity>
</Property>
<Property name="Weight">
<AverageFieldSize>2.75</AverageFieldSize>
<Selectivity>5.0000%</Selectivity>
</Property>
<Property name="Zip">
<AverageFieldSize>5</AverageFieldSize>
<Selectivity>10.0000%</Selectivity>
</Property>
<SQLMap name="IDKEY1">
<BlockCount>-4</BlockCount>
</SQLMap>
<SQLMap name="IDkey">
<BlockCount>-4</BlockCount>
</SQLMap>
<StreamLocation>^BestOffer.Data.ItemS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
