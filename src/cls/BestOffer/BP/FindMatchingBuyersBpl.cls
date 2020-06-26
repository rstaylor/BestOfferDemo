/// 
Class BestOffer.BP.FindMatchingBuyersBpl Extends Ens.BusinessProcessBPL [ DependsOn = BestOffer.BP.FindMatchingBuyersBpl.ContextClass ]
{

Parameter SETTINGS = "Delay,TimeLimit";

/// Delay between search iterations
Property Delay As %String [ InitialExpression = "PT60S" ];

/// Time Limit in seconds before Buyer search terminates
Property TimeLimit As %String [ InitialExpression = "180" ];

Storage Default
{
<Data name="FindMatchingBuyersDefaultData">
<Subscript>"FindMatchingBuyers"</Subscript>
<Value name="1">
<Value>Delay</Value>
</Value>
<Value name="2">
<Value>Iterations</Value>
</Value>
<Value name="3">
<Value>TimeLimit</Value>
</Value>
</Data>
<DefaultData>FindMatchingBuyersDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

/// BPL Definition
XData BPL [ XMLNamespace = "http://www.intersystems.com/bpl" ]
{
<process language='objectscript' request='BestOffer.Message.NewItemRequest' response='Ens.Response' contextsuperclass='BestOffer.BP.FindMatchingBuyersBpl.ContextClass' height='2000' width='2000' >
<sequence xend='200' yend='650' >
<assign name="Calculate end time" property="context.CutoffTimeLimit" value="##class(BestOffer.Util.Utils).CalcTimeLimit(process.TimeLimit)" action="set" xpos='200' ypos='250' />
<rule name='DiscountRate' rule='BestOffer.Rule.DiscountRule'  resultLocation='context.SiteWideDiscountRate' ruleContext='context' xpos='200' ypos='350' >
</rule>
<trace value='"Discount Rate: "_context.SiteWideDiscountRate_"%"' xpos='200' ypos='450' />
<while name='Main loop' condition='context.AtEnd=0' xpos='200' ypos='550' xend='200' yend='1050' >
<if name='Closed?' condition='##class(BestOffer.Data.Item).GetStatus(request.ItemID)="Closed"' xpos='207' ypos='250' xend='200' yend='950' >
<annotation><![CDATA[If Item already closed, skip search
]]></annotation>
<true>
<assign name="Set AtEnd" property="context.AtEnd" value="1" action="set" xpos='200' ypos='400' />
</true>
<false>
<assign name="Execute database Query" property="status" value="context.ExecuteDBQuery()" action="set" xpos='470' ypos='400' />
<while name='Process each Buyer' condition='context.ResultSet.%Next()=1' xpos='470' ypos='500' xend='200' yend='350' >
<annotation>Iterate through available Buyers</annotation>
<call name='Create Bidding Thread' target='Create Bidding Thread' async='1' xpos='200' ypos='250' >
<request type='BestOffer.Message.BidThreadRequest' >
<assign property="callrequest.Buyer" value="context.ResultSet.BuyerID" action="set" />
<assign property="callrequest.Item" value="request.ItemID" action="set" />
</request>
<response type='Ens.Response' />
</call>
</while>
<if name='Cutoff limit expired?' condition='context.CutoffTimeLimit]$zdatetime($horolog,3)' xpos='470' ypos='600' xend='470' yend='850' >
<true>
<assign name="Set AtEnd" property="context.AtEnd" value="1" action="set" xpos='740' ypos='750' />
</true>
<false>
<delay name='Pause execution before retry' duration='process.Delay' xpos='470' ypos='750' />
</false>
</if>
</false>
</if>
</while>
</sequence>
</process>
}

}
