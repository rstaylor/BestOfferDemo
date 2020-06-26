/// 
Class BestOffer.BP.BidAcceptanceBpl Extends Ens.BusinessProcessBPL [ DependsOn = BestOffer.BP.BidAcceptanceBpl.ContextClass ]
{

Storage Default
{
<Type>%Storage.Persistent</Type>
}

/// BPL Definition
XData BPL [ XMLNamespace = "http://www.intersystems.com/bpl" ]
{
<process language='objectscript' request='BestOffer.Message.BidAcceptanceRequest' response='Ens.Response' contextsuperclass='BestOffer.BP.BidAcceptanceBpl.ContextClass' height='3450' width='2000' >
<sequence xend='200' yend='1200' >
<sequence name='Notify Buyer' xpos='200' ypos='250' xend='200' yend='450' >
<call name='Notify via Email' target='Notify Buyer' async='1' xpos='200' ypos='250' >
<request type='BestOffer.Message.NotifyRequest' >
<assign property="callrequest.BidThreadID" value="request.BidThreadID" action="set" />
<assign property="callrequest.Subject" value="&quot;Your bid has been accepted!&quot;" action="set" />
</request>
<response type='Ens.Response' />
</call>
<empty name='Push Notification to Mobile' xpos='200' ypos='350' />
</sequence>
<call name='Buyer Acknowledgement' target='Buyer Acknowledgement' async='0' xpos='200' ypos='350' >
<annotation><![CDATA[Human Task - Buyer acknowledges Sellers acceptance

]]></annotation>
<request type='EnsLib.Workflow.TaskRequest' >
<assign property="callrequest.%Actions" value="&quot;Accept,Reject&quot;" action="set" />
<assign property="callrequest.%Message" value="&quot;Final Item confirmation&quot;" action="set" />
<assign property="callrequest.%FormFields" value="&quot;ItemId,Item,SellerID,Value,Weight,OriginationZip,Bid Amount,Agreed Cost of Item&quot;" action="set" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(request.BidThreadID).Item.Seller.%Id()" action="set" key="&quot;SellerID&quot;" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(request.BidThreadID).Item.OriginationAddress.Zip" action="set" key="&quot;OriginationZip&quot;" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(request.BidThreadID).Item.Value" action="set" key="&quot;Value&quot;" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(request.BidThreadID).Item.Weight" action="set" key="&quot;Weight&quot;" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(request.BidThreadID).Item.%Id()" action="set" key="&quot;ItemId&quot;" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(request.BidThreadID).Item.Description" action="set" key="&quot;Item&quot;" />
<assign property="callrequest.%FormValues" value="context.BidAmount" action="set" key="&quot;Bid Amount&quot;" />
<assign property="callrequest.%UserName" value="##class(BestOffer.Data.BidThread).%OpenId(request.BidThreadID).Buyer.Contact" action="set" />
<assign property="callrequest.%FormValues" value="##class(BestOffer.Data.BidThread).%OpenId(request.BidThreadID).FinalBidAmount" action="set" key="&quot;Agreed Cost of Item&quot;" />
</request>
<response type='EnsLib.Workflow.TaskResponse' >
<assign property="context.WFComments" value="callresponse.%Message" action="set" />
<assign property="context.Action" value="callresponse.%Action" action="set" />
</response>
</call>
<empty name='Check Response Timeout' xpos='200' ypos='450' />
<if name='Acknowledged?' condition='context.Action="Accept"' xpos='200' ypos='550' xend='200' yend='1100' >
<true>
<assign name="Close Item" property="status" value="context.CloseItem(request)" action="set" xpos='335' ypos='700' />
<sequence name='Notify Buyer' xpos='335' ypos='800' xend='200' yend='450' >
<call name='Notify via Email' target='Notify Buyer' async='1' xpos='200' ypos='250' >
<request type='BestOffer.Message.NotifyRequest' >
<assign property="callrequest.BidThreadID" value="request.BidThreadID" action="set" />
<assign property="callrequest.Subject" value="&quot;Sale confirmed!&quot;" action="set" />
</request>
<response type='Ens.Response' />
</call>
<empty name='Push Notification to Mobile' xpos='200' ypos='350' />
</sequence>
<sequence name='Notify Seller' xpos='335' ypos='900' xend='200' yend='450' >
<call name='Notify via Email' target='Notify Seller' async='1' xpos='200' ypos='250' >
<request type='BestOffer.Message.NotifyRequest' >
<assign property="callrequest.BidThreadID" value="request.BidThreadID" action="set" />
<assign property="callrequest.Subject" value="&quot;Sale Confirmed!&quot;" action="set" />
</request>
<response type='Ens.Response' />
</call>
<empty name='Push notification to mobile' xpos='200' ypos='350' />
</sequence>
<empty name='Terminate other bid threads' xpos='335' ypos='1000' />
</true>
</if>
</sequence>
</process>
}

}
