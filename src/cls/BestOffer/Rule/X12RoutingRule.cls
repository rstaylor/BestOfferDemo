/// 
Class BestOffer.Rule.X12RoutingRule Extends Ens.Rule.Definition
{

Parameter RuleAssistClass = "EnsLib.MsgRouter.VDocRuleAssist";

XData RuleDefinition [ XMLNamespace = "http://www.intersystems.com/rule" ]
{
<ruleDefinition alias="BestOffer.Rule.X12RoutingRule" context="EnsLib.MsgRouter.VDocRoutingEngine" production="BestOffer.Production">
<ruleSet name="" effectiveBegin="" effectiveEnd="">
<send transform="" target="X12 MainBP"></send>
</ruleSet>
</ruleDefinition>
}

}
