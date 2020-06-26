Class BestOffer.DTL.DTL204 Extends Ens.DataTransformDTL [ DependsOn = (EnsLib.EDI.X12.Document, BestOffer.Data.Item) ]
{

Parameter IGNOREMISSINGSOURCE = 1;

Parameter REPORTERRORS = 1;

Parameter TREATEMPTYREPEATINGFIELDASNULL = 0;

XData DTL [ XMLNamespace = "http://www.intersystems.com/dtl" ]
{
<transform sourceClass='EnsLib.EDI.X12.Document' targetClass='BestOffer.Data.Item' sourceDocType='204_004010:204' create='new' language='objectscript' >
<assign value='source.{ST:TransactionSetControlNumber}' property='target.RequestID' action='set' />
<trace value='"Controlid:"_source.{ST:TransactionSetControlNumber}' />
<assign value='source.{loop0100(1).N3(1):AddressInformation}' property='target.OriginationAddress.Street' action='set' />
<assign value='source.{loop0100(1).N4:CityName}' property='target.OriginationAddress.City' action='set' />
<assign value='source.{loop0100(1).N4:StateorProvinceCode}' property='target.OriginationAddress.State' action='set' />
<assign value='source.{loop0100(1).N4:PostalCode}' property='target.OriginationAddress.Zip' action='set' />
<assign value='source.{loop0100(1).N4:CountryCode}' property='target.OriginationAddress.Country' action='set' />
<assign value='+..ConvertDateTime(source.{G62:Date},"%Y%m%d","%q(3)")' property='target.InitialDate' action='set' />
<assign value='$e(source.{G62:Time},1,2)*60+$e(source.{G62:Time},3,4)*60' property='target.InitialTime' action='set' />
<assign value='"Pending"' property='target.Status' action='set' />
</transform>
}

}
