/// 
Class BestOffer.BP.X12Bpl Extends Ens.BusinessProcessBPL
{

Storage Default
{
<Type>%Storage.Persistent</Type>
}

/// BPL Definition
XData BPL [ XMLNamespace = "http://www.intersystems.com/bpl" ]
{
<process language='objectscript' request='EnsLib.EDI.X12.Document' response='Ens.Response' height='2000' width='2000' >
<context>
<property name='NewRequest' type='BestOffer.Data.Item' instantiate='0' />
<property name='Approved' type='%Boolean' instantiate='0' />
<property name='WFUsername' type='%String' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='50' />
</parameters>
</property>
<property name='WFComments' type='%String' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='50' />
</parameters>
</property>
</context>
<sequence xend='200' yend='1650' >
<transform name='Transform to a new object' class='BestOffer.DTL.DTL204' source='request' target='context.NewRequest' xpos='200' ypos='250' />
<trace value='"Transform completed"' xpos='200' ypos='350' />
<code name='Save to database' xpos='200' ypos='450' >
<![CDATA[ set stat=##class(BestOffer.Data.Item).UpdateDB(context.NewRequest)
 set context.NewRequest=##class(BestOffer.Data.Item).%OpenId(context.NewRequest.RequestID)]]>
</code>
<if name='Has notes?' condition='request.GetValueAt("NTE(1):Description")&apos;=""' xpos='200' ypos='550' xend='200' yend='1550' >
<true>
<call name='Send initial email' target='X12 Email Notification' async='1' xpos='335' ypos='700' >
<request type='BestOffer.Message.X12EmailRequest' >
<assign property="callrequest.Subject" value="&quot;New 204 message arrived with controlid=2345617&quot;_context.NewRequest.RequestID" action="set" />
<assign property="callrequest.Body" value="&quot;There is a new Item request.&quot;" action="set" />
</request>
<response type='Ens.Response' />
</call>
<call name='Get Approval' target='X12 Item Approval' async='0' xpos='335' ypos='800' >
<request type='EnsLib.Workflow.TaskRequest' >
<assign property="callrequest.%Actions" value="&quot;Approved,Rejected&quot;" action="set" />
<assign property="callrequest.%Message" value="&quot;Need to approve something!&quot;" action="set" />
<assign property="callrequest.%FormFields" value="&quot;Comments,Amount&quot;" action="set" />
<assign property="callrequest.%FormValues" value="2700" action="set" key="&quot;Amount&quot;" />
</request>
<response type='EnsLib.Workflow.TaskResponse' >
<assign property="context.Approved" value="callresponse.%Action" action="set" />
<assign property="context.WFUsername" value="callresponse.%UserName" action="set" />
<assign property="context.WFComments" value="callresponse.%FormValues" action="set" />
</response>
</call>
<call name='Send approve/reject email' target='X12 Email Notification' async='1' xpos='335' ypos='900' >
<request type='BestOffer.Message.X12EmailRequest' >
<assign property="callrequest.Subject" value="context.WFUsername_&quot; has changed status of Item ID:2345617&quot;_context.NewRequest.RequestID" action="set" />
<assign property="callrequest.Body" value="&quot;Status has changed to &quot;_context.Approved" action="set" />
<assign property="callrequest.Comments" value="context.WFComments.GetAt(&quot;Comments&quot;)" action="set" />
</request>
<response type='Ens.StringResponse' >
<assign property="context.WFComments" value="callresponse.StringValue" action="set" />
</response>
</call>
<if name='Status Approved?' condition='context.Approved="Approved"' xpos='335' ypos='1000' xend='335' yend='1450' >
<true>
<trace name='Approved!' value='"Approved!"' xpos='605' ypos='1150' />
<call name='Forward on 204' target='X12 Outbound' async='1' xpos='605' ypos='1350' >
<request type='EnsLib.EDI.X12.Document' >
<assign property="callrequest" value="request" action="set" />
</request>
<response type='Ens.Response' />
</call>
</true>
<false>
<trace name='Rejected!' value='"Rejected!"' xpos='335' ypos='1150' />
</false>
</if>
</true>
</if>
</sequence>
</process>
}

}
