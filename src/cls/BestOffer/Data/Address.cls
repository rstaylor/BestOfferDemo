Class BestOffer.Data.Address Extends (%SerialObject, %Populate, %XML.Adaptor, %JSON.Adaptor)
{

Property Street As %String;

Property City As %String;

Property State As %String(POPSPEC = "USState()");

Property Zip As %String(POPSPEC = "USZip()");

Property Country As %String [ InitialExpression = "USA" ];

Property Residence As %Boolean;

Storage Default
{
<Data name="AddressState">
<Value name="1">
<Value>Street</Value>
</Value>
<Value name="2">
<Value>City</Value>
</Value>
<Value name="3">
<Value>State</Value>
</Value>
<Value name="4">
<Value>Zip</Value>
</Value>
<Value name="5">
<Value>Country</Value>
</Value>
<Value name="6">
<Value>Residence</Value>
</Value>
</Data>
<State>AddressState</State>
<StreamLocation>^BestOffer.Data.AddressS</StreamLocation>
<Type>%Storage.Serial</Type>
}

}
