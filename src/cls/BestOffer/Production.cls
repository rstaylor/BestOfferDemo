Class BestOffer.Production Extends Ens.Production
{

XData ProductionDefinition
{
<Production Name="BestOffer.Production" TestingEnabled="true" LogGeneralTraceEvents="true">
  <Description></Description>
  <ActorPoolSize>2</ActorPoolSize>
  <Item Name="New Item" Category="Workflow" ClassName="BestOffer.Service.NewItem" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
    <Setting Target="Adapter" Name="CallInterval">900</Setting>
  </Item>
  <Item Name="Create Bidding Thread" Category="Workflow" ClassName="BestOffer.BP.CreateBiddingThreadBpl" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="true" Schedule="">
  </Item>
  <Item Name="Find Matching Buyers" Category="Workflow" ClassName="BestOffer.BP.FindMatchingBuyersBpl" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="true" Schedule="">
  </Item>
  <Item Name="Notify Buyer" Category="Workflow" ClassName="BestOffer.Operation.NotifyBuyer" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
    <Setting Target="Adapter" Name="Credentials">Email</Setting>
    <Setting Target="Adapter" Name="SMTPPort">465</Setting>
    <Setting Target="Adapter" Name="SMTPServer">smtp.gmail.com</Setting>
    <Setting Target="Adapter" Name="From">richtaylor0420@gmail.com</Setting>
    <Setting Target="Adapter" Name="SSLConfig">Email</Setting>
  </Item>
  <Item Name="Buyer Bid Response" Category="Workflow" ClassName="EnsLib.Workflow.Operation" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
    <Setting Target="Host" Name="AutoCreateRole">0</Setting>
  </Item>
  <Item Name="Notify Seller" Category="Workflow" ClassName="BestOffer.Operation.NotifySeller" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
    <Setting Target="Adapter" Name="Credentials">Email</Setting>
    <Setting Target="Adapter" Name="SMTPPort">465</Setting>
    <Setting Target="Adapter" Name="SMTPServer">smtp.gmail.com</Setting>
    <Setting Target="Adapter" Name="SSLConfig">Email</Setting>
    <Setting Target="Adapter" Name="From">richtaylor0420@gmail.com</Setting>
  </Item>
  <Item Name="Review Buyer Bid" Category="Workflow" ClassName="EnsLib.Workflow.Operation" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
  </Item>
  <Item Name="Buyer Acknowledgement" Category="Workflow" ClassName="EnsLib.Workflow.Operation" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
    <Setting Target="Host" Name="AutoCreateRole">0</Setting>
  </Item>
  <Item Name="Bid Acceptance" Category="Workflow" ClassName="BestOffer.BP.BidAcceptanceBpl" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
  </Item>
</Production>
}

}
