Class BestOffer.DTL.DTL204To204 Extends Ens.DataTransformDTL [ DependsOn = EnsLib.EDI.X12.Document ]
{

Parameter IGNOREMISSINGSOURCE = 1;

Parameter REPORTERRORS = 1;

Parameter TREATEMPTYREPEATINGFIELDASNULL = 0;

XData DTL [ XMLNamespace = "http://www.intersystems.com/dtl" ]
{
<transform sourceClass='EnsLib.EDI.X12.Document' targetClass='EnsLib.EDI.X12.Document' sourceDocType='204_004010:204' targetDocType='204_004010:204' create='copy' language='objectscript' >
<assign value='""' property='target.{G62:Time}' action='set' />
</transform>
}

}
