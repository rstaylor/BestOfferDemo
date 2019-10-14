/// 
Class BestOffer.BP.CreateBiddingThreadBpl Extends Ens.BusinessProcessBPL [ DependsOn = BestOffer.BP.CreateBiddingThreadBpl.ContextClass ]
{

Storage Default
{
<Type>%Storage.Persistent</Type>
}

/// BPL Definition
XData BPL [ XMLNamespace = "http://www.intersystems.com/bpl" ]
{
<process language='objectscript' request='BestOffer.Message.BidThreadRequest' response='Ens.Response' contextsuperclass='BestOffer.BP.CreateBiddingThreadBpl.ContextClass' height='3450' width='2000' >
<sequence xend='200' yend='550' >
<assign name="Save Thread to DB" property="status" value="context.SaveToDB(request)" action="set" xpos='200' ypos='250' />
<sequence name='Notify Buyer' xpos='200' ypos='350' xend='200' yend='450' >
<call name='Notify via Email' target='Notify Buyer' async='1' xpos='200' ypos='250' >
<request type='BestOffer.Message.NotifyRequest' >
<assign property="callrequest.BidThreadID" value="context.BidThreadID" action="set" />
<assign property="callrequest.Subject" value="&quot;you have a new Item ready for bidding!&quot;" action="set" />
</request>
<response type='Ens.Response' />
</call>
<empty name='Notify Mobile' xpos='200' ypos='350' />
</sequence>
<while name='Done?' condition='",Cancel,Closed,"&apos;[","_context.ItemStatus_","' xpos='200' ypos='450' xend='200' yend='1450' >
<call name='Begin Buyer Bid Response' target='Buyer Bid Response' async='0' xpos='200' ypos='250' >
<annotation><![CDATA[Human Task - put entry onto Buyer's workflow worklist
]]></annotation>
<request type='EnsLib.Workflow.TaskRequest' >
<assign property="callrequest.%Actions" value="&quot;Bid,Reject&quot;" action="set" />
<assign property="callrequest.%Message" value="&quot;New Item notification&quot;" action="set" />
<assign property="callrequest.%FormFields" value="&quot;Item,Value,Weight,OriginationZip,Bid Amount&quot;" action="set" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.OriginationAddress.Zip" action="set" key="&quot;OriginationZip&quot;" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.Value" action="set" key="&quot;Value&quot;" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.Weight" action="set" key="&quot;Weight&quot;" />
<assign property="callrequest.%UserName" value="##class(BestOffer.Data.Buyer).%OpenId(request.Buyer).Contact" action="set" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.Description" action="set" key="&quot;Item&quot;" />
</request>
<response type='EnsLib.Workflow.TaskResponse' >
<assign property="context.WFComments" value="callresponse.%Message" action="set" />
<assign property="context.Action" value="callresponse.%Action" action="set" />
<assign property="context.BidAmount" value="callresponse.%FormValues.GetAt(&quot;Bid Amount&quot;)" action="set" />
</response>
</call>
<empty name='Check Response Timeout' xpos='200' ypos='350' />
<assign name="UpdateBidThread" property="status" value="context.UpdateBidThread()" action="set" xpos='200' ypos='450' />
<if name='Bidded?' condition='context.Action="Bid"' xpos='200' ypos='550' xend='200' yend='1350' >
<true>
<sequence name='Notify Seller' xpos='470' ypos='700' xend='200' yend='450' >
<call name='Notify via Email' target='Notify Seller' async='1' xpos='200' ypos='250' >
<request type='BestOffer.Message.NotifyRequest' >
<assign property="callrequest.BidThreadID" value="context.BidThreadID" action="set" />
<assign property="callrequest.Subject" value="&quot;you have a new bid on your Item!&quot;" action="set" />
</request>
<response type='Ens.Response' />
</call>
<empty name='Push notification to mobile' xpos='200' ypos='350' />
</sequence>
<call name='Review Buyer Bid' target='Review Buyer Bid' async='0' xpos='470' ypos='800' >
<annotation><![CDATA[Human Task -  Seller reviews bid info

]]></annotation>
<request type='EnsLib.Workflow.TaskRequest' >
<assign property="callrequest.%Actions" value="&quot;Accept,Reject,CounterBid&quot;" action="set" />
<assign property="callrequest.%Message" value="&quot;Review Buyer's bid&quot;" action="set" />
<assign property="callrequest.%FormFields" value="&quot;Bid Amount,Counter Bid Amount&quot;" action="set" />
<assign property="callrequest.%UserName" value="##class(BestOffer.Data.Item).%OpenId(request.Item).Seller.Contact" action="set" />
<assign property="callrequest.%FormValues" value="context.BidAmount" action="set" key="&quot;Bid Amount&quot;" />
</request>
<response type='EnsLib.Workflow.TaskResponse' >
<assign property="context.WFComments" value="callresponse.%Message" action="set" />
<assign property="context.Action" value="callresponse.%Action" action="set" />
<assign property="context.CounterBidAmount" value="callresponse.%FormValues.GetAt(&quot;Counter Bid Amount&quot;)" action="set" />
</response>
</call>
<switch name='Seller response action' xpos='470' ypos='900' xend='470' yend='1250' >
<case condition='context.Action="CounterBid"' name='CiounterBid' >
<sequence name='Notify Buyer' xpos='605' ypos='1050' xend='200' yend='450' >
<call name='Notify via Email' target='Notify Buyer' async='1' xpos='200' ypos='250' >
<request type='BestOffer.Message.NotifyRequest' >
<assign property="callrequest.BidThreadID" value="context.BidThreadID" action="set" />
<assign property="callrequest.Subject" value="&quot;Your bid has been counterbid by the Seller!&quot;" action="set" />
</request>
<response type='Ens.Response' />
</call>
<empty name='Push Notification to Mobile' xpos='200' ypos='350' />
</sequence>
</case>
<case condition='context.Action="Accept"' name='Accept Bid' >
<assign name="UpdateBidThreadFinal" property="status" value="context.UpdateBidThreadFinal()" action="set" xpos='875' ypos='1050' />
<call name='Buyer Acknowledgement' target='Bid Acceptance' async='0' xpos='875' ypos='1150' >
<annotation><![CDATA[Buyer acknowledges Sellers acceptance

]]></annotation>
<request type='BestOffer.Message.BidAcceptanceRequest' >
<assign property="callrequest.BidThreadID" value="context.BidThreadID" action="set" />
</request>
<response type='EnsLib.Workflow.TaskResponse' />
</call>
</case>
<default name='default' />
</switch>
</true>
<false>
<assign name="Cancel" property="context.ItemStatus" value="&quot;Cancel&quot;" action="set" xpos='200' ypos='700' />
</false>
</if>
</while>
</sequence>
</process>
}

}
