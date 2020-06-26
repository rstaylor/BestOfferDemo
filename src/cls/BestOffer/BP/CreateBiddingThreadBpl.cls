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
<context>
<property name='BuyerEmailSubject' type='%String' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='250' />
</parameters>
</property>
</context>
<sequence xend='200' yend='650' >
<assign name="Save Thread to DB" property="status" value="context.SaveToDB(request)" action="set" xpos='200' ypos='250' />
<assign name="assign email subject for new bid" property="context.BuyerEmailSubject" value="&quot;you have a new Item ready for bidding!&quot;" action="set" xpos='200' ypos='350' />
<sequence name='Notify Buyer' xpos='200' ypos='450' xend='200' yend='450' >
<call name='Notify via Email' target='Notify Buyer' async='1' xpos='200' ypos='250' >
<request type='BestOffer.Message.NotifyRequest' >
<assign property="callrequest.BidThreadID" value="context.BidThreadID" action="set" />
<assign property="callrequest.Subject" value="context.BuyerEmailSubject" action="set" />
</request>
<response type='Ens.Response' />
</call>
<empty name='Notify Mobile' xpos='200' ypos='350' />
</sequence>
<while name='Done?' condition='",Cancel,Closed,"&apos;[","_context.ItemStatus_","' xpos='200' ypos='550' xend='200' yend='1550' >
<call name='Begin Buyer Bid Response' target='Buyer Bid Response' async='0' xpos='200' ypos='250' >
<annotation><![CDATA[Human Task - put entry onto Buyer's workflow worklist
]]></annotation>
<request type='EnsLib.Workflow.TaskRequest' >
<assign property="callrequest.%Actions" value="&quot;Bid,Reject&quot;" action="set" />
<assign property="callrequest.%Message" value="&quot;New Item notification&quot;" action="set" />
<assign property="callrequest.%FormFields" value="&quot;ItemId,Item,SellerID,Value,Weight,OriginationZip,Counter Bid Amount,Bid Amount&quot;" action="set" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.Seller.%Id()" action="set" key="&quot;SellerID&quot;" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.OriginationAddress.Zip" action="set" key="&quot;OriginationZip&quot;" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.Value" action="set" key="&quot;Value&quot;" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.Weight" action="set" key="&quot;Weight&quot;" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.%Id()" action="set" key="&quot;ItemId&quot;" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.Description" action="set" key="&quot;Item&quot;" />
<assign property="callrequest.%FormValues" value="context.BidAmount" action="set" key="&quot;Bid Amount&quot;" />
<assign property="callrequest.%FormValues" value="context.CounterBidAmount" action="set" key="&quot;Counter Bid Amount&quot;" />
<assign property="callrequest.%UserName" value="##class(BestOffer.Data.Buyer).%OpenId(request.Buyer).Contact" action="set" />
</request>
<response type='EnsLib.Workflow.TaskResponse' >
<assign property="context.WFComments" value="callresponse.%Message" action="set" />
<assign property="context.Action" value="callresponse.%Action" action="set" />
<assign property="context.BidAmount" value="callresponse.%FormValues.GetAt(&quot;Bid Amount&quot;)" action="set" />
</response>
</call>
<empty name='Check Response Timeout' xpos='200' ypos='350' />
<assign name="UpdateBidThread" property="status" value="context.UpdateBidThread()" action="set" xpos='200' ypos='450' />
<if name='Bidded?' condition='context.Action="Bid"' xpos='200' ypos='550' xend='200' yend='1450' >
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
<assign property="callrequest.%FormFields" value="&quot;ItemId,Item,SellerID,Value,Weight,OriginationZip,Counter Bid Amount,Bid Amount&quot;" action="set" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.Seller.%Id()" action="set" key="&quot;SellerID&quot;" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.OriginationAddress.Zip" action="set" key="&quot;OriginationZip&quot;" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.Value" action="set" key="&quot;Value&quot;" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(context.BidThreadID).Item.Weight" action="set" key="&quot;Weight&quot;" />
<assign property="callrequest.%UserName" value="##class(BestOffer.Data.Item).%OpenId(request.Item).Seller.Contact" action="set" />
<assign property="callrequest.%FormValues" value="context.BidAmount" action="set" key="&quot;Bid Amount&quot;" />
<assign property="callrequest.%FormValues" value="context.CounterBidAmount" action="set" key="&quot;Counter Bid Amount&quot;" />
<assign property="callrequest.%FormValues" value="request.Item" action="set" key="&quot;ItemId&quot;" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.Item).%OpenId(request.Item).Description" action="set" key="&quot;Item&quot;" />
</request>
<response type='EnsLib.Workflow.TaskResponse' >
<assign property="context.WFComments" value="callresponse.%Message" action="set" />
<assign property="context.Action" value="callresponse.%Action" action="set" />
<assign property="context.CounterBidAmount" value="callresponse.%FormValues.GetAt(&quot;Counter Bid Amount&quot;)" action="set" />
</response>
</call>
<switch name='Seller response action' xpos='470' ypos='900' xend='470' yend='1350' >
<case condition='context.Action="Accept"' name='Accept Bid' >
<assign name="UpdateBidThreadFinal" property="status" value="context.UpdateBidThreadFinal()" action="set" xpos='740' ypos='1050' />
<call name='Buyer Acknowledgement' target='Bid Acceptance' async='0' xpos='740' ypos='1150' >
<annotation><![CDATA[Buyer acknowledges Sellers acceptance

]]></annotation>
<request type='BestOffer.Message.BidAcceptanceRequest' >
<assign property="callrequest.BidThreadID" value="context.BidThreadID" action="set" />
</request>
<response type='EnsLib.Workflow.TaskResponse' />
</call>
</case>
<case condition='context.Action="CounterBid"' name='counter bid' >
<assign name="buyer email subject for counter bid " property="context.BuyerEmailSubject" value="&quot;you have a counter bid for an Item!&quot;" action="set" xpos='1010' ypos='1050' />
<sequence name='Notify Buyer' xpos='1010' ypos='1150' xend='200' yend='450' >
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
<case condition='context.Action="Reject"' name='reject' >
<trace value='"Seller rejected Bid"' xpos='1280' ypos='1050' />
<assign name="buyer email subject for rejected bid " property="context.BuyerEmailSubject" value="&quot;Seller has rejected a bid&quot;" action="set" xpos='1280' ypos='1150' />
<sequence name='Notify Buyer' xpos='1280' ypos='1250' xend='200' yend='450' >
<call name='Notify via Email' target='Notify Buyer' async='1' xpos='200' ypos='250' >
<request type='BestOffer.Message.NotifyRequest' >
<assign property="callrequest.BidThreadID" value="context.BidThreadID" action="set" />
<assign property="callrequest.Subject" value="context.BuyerEmailSubject" action="set" />
</request>
<response type='Ens.Response' />
</call>
<empty name='Push Notification to Mobile' xpos='200' ypos='350' />
</sequence>
</case>
<default>
<trace value='"seller action="_context.Action' xpos='470' ypos='1050' />
</default>
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
