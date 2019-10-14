Class BestOffer.Production Extends Ens.Production
{

XData ProductionDefinition
{
<Production Name="BestOffer.Production" TestingEnabled="true" LogGeneralTraceEvents="true">
  <Description></Description>
  <ActorPoolSize>2</ActorPoolSize>
  <Item Name="X12 Inbound" Category="X12" ClassName="EnsLib.EDI.X12.Service.FileService" PoolSize="1" Enabled="true" Foreground="false" Comment="These are my comments nuber 2" LogTraceEvents="false" Schedule="">
    <Setting Target="Host" Name="TargetConfigNames">X12 Inbound_Router</Setting>
    <Setting Target="Adapter" Name="FilePath">d:\enshl7\BestOffer\in</Setting>
    <Setting Target="Adapter" Name="ArchivePath"></Setting>
    <Setting Target="Adapter" Name="FileSpec">*</Setting>
    <Setting Target="Host" Name="DocSchemaCategory">204_004010</Setting>
    <Setting Target="Host" Name="BatchHandling">Indiv</Setting>
    <Setting Target="Adapter" Name="CallInterval">2</Setting>
  </Item>
  <Item Name="X12 Inbound_Router" Category="X12" ClassName="EnsLib.MsgRouter.VDocRoutingEngine" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
    <Setting Target="Host" Name="Validation"></Setting>
    <Setting Target="Host" Name="BusinessRuleName">BestOffer.Rule.X12RoutingRule</Setting>
  </Item>
  <Item Name="X12 MainBP" Category="X12" ClassName="BestOffer.BP.X12Bpl" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="true" Schedule="">
  </Item>
  <Item Name="X12 Item Approval" Category="X12" ClassName="EnsLib.Workflow.Operation" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
    <Setting Target="Host" Name="AutoCreateRole">0</Setting>
  </Item>
  <Item Name="X12 Outbound" Category="X12" ClassName="EnsLib.EDI.X12.Operation.FileOperation" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
    <Setting Target="Adapter" Name="FilePath">d:\enshl7\BestOffer\out</Setting>
    <Setting Target="Host" Name="Filename">%f_%Q%!+(_a) .txt</Setting>
  </Item>
  <Item Name="New Item" Category="Workflow" ClassName="BestOffer.Service.NewItem" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
    <Setting Target="Adapter" Name="CallInterval">900</Setting>
  </Item>
  <Item Name="Create Bidding Thread" Category="Workflow" ClassName="BestOffer.BP.CreateBiddingThreadBpl" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="true" Schedule="">
  </Item>
  <Item Name="Find Matching Buyers" Category="Workflow" ClassName="BestOffer.BP.FindMatchingBuyersBpl" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="true" Schedule="">
  </Item>
  <Item Name="Notify Buyer" Category="Workflow" ClassName="BestOffer.Operation.NotifyBuyer" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
    <Setting Target="Adapter" Name="Credentials"></Setting>
    <Setting Target="Adapter" Name="SMTPPort"></Setting>
    <Setting Target="Adapter" Name="SMTPServer"></Setting>
    <Setting Target="Adapter" Name="From"></Setting>
    <Setting Target="Adapter" Name="SSLConfig"></Setting>
  </Item>
  <Item Name="Buyer Bid Response" Category="Workflow" ClassName="EnsLib.Workflow.Operation" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
    <Setting Target="Host" Name="AutoCreateRole">0</Setting>
  </Item>
  <Item Name="Notify Seller" Category="Workflow" ClassName="BestOffer.Operation.NotifySeller" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
    <Setting Target="Adapter" Name="Credentials"></Setting>
    <Setting Target="Adapter" Name="SMTPPort"></Setting>
    <Setting Target="Adapter" Name="SMTPServer"></Setting>
    <Setting Target="Adapter" Name="SSLConfig"></Setting>
    <Setting Target="Adapter" Name="From"></Setting>
  </Item>
  <Item Name="Review Buyer Bid" Category="Workflow" ClassName="EnsLib.Workflow.Operation" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
  </Item>
  <Item Name="Buyer Acknowledgement" Category="Workflow" ClassName="EnsLib.Workflow.Operation" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
    <Setting Target="Host" Name="AutoCreateRole">0</Setting>
  </Item>
  <Item Name="Bid Acceptance" Category="Workflow" ClassName="BestOffer.BP.BidAcceptanceBpl" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
  </Item>
  <Item Name="X12 Email Notification" Category="X12" ClassName="BestOffer.Operation.X12EmailNotification" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
    <Setting Target="Adapter" Name="Credentials"></Setting>
    <Setting Target="Adapter" Name="SMTPPort"></Setting>
    <Setting Target="Adapter" Name="SMTPServer"></Setting>
    <Setting Target="Adapter" Name="SSLConfig"></Setting>
    <Setting Target="Adapter" Name="From"></Setting>
    <Setting Target="Host" Name="EmailAddresses"></Setting>
  </Item>
</Production>
}

}
