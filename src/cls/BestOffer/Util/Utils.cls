/// TODO: fix default email addresses in Seller and Buyer classes
Class BestOffer.Util.Utils [ Abstract ]
{

/// Contact name for the Buyer
Parameter BuyerName = "Scott";

/// Contact name for the Seller
Parameter SellerName = "Michael";

/// Contact name for the X12 demo email recipient
Parameter X12Name = "Roberto";

/// Email address of email account holder and of Buyer/Seller
Parameter EmailAddress = "richtaylor0420@gmail.com";

/// Email password of email account holder 
Parameter EmailPassword = "imtuhdelmgewcpwi";

/// Gmail use smtp.gmail.com
Parameter EmailServer = "smtp.gmail.com";

/// Gmail use 587
Parameter EmailPort = 465;

/// SSL/TLS config name
Parameter SSLConfig = "Email";

/// Set this to "*" if Ensemble needs to switch to SSL/TLS on the same port, otherwise leave set to null
/// Gmail needs this
Parameter SSLSwitch;

/// Name for Ensemble Credentials used for Email accout authentication
Parameter Credentials = "Email";

/// Main entry point - run this once per instance
ClassMethod Build() As %Status
{
	set tSC=..BuildEnsembleUsers()
	set tSC=..BuildWFUsers()
	set tSC=..BuildData()
	set tSC=..FixProduction()
	Do EnableDeepSee^%SYS.cspServer(0)      //for all namespaces
	#; do ##class(Ens.Director).SetAutoStart("BestOffer.Production")
	#; Do ##class(Ens.Director).StartProduction("BestOffer.Production")
	quit tSC
}

/// Main entry point - run this once per instance
ClassMethod FixProduction() As %Status
{
	set SSLConfig=..#SSLConfig_..#SSLSwitch
	set tSC=..UpdateSetting(,"Notify Buyer","From",..#EmailAddress) b:$$$ISERR(tSC)
	set tSC=..UpdateSetting(,"Notify Buyer","SMTPServer",..#EmailServer) b:$$$ISERR(tSC)
	set tSC=..UpdateSetting(,"Notify Buyer","SMTPPort",..#EmailPort) b:$$$ISERR(tSC)
	set tSC=..UpdateSetting(,"Notify Buyer","SSLConfig",SSLConfig) b:$$$ISERR(tSC)
	set tSC=..UpdateSetting(,"Notify Buyer","Credentials",..#Credentials) b:$$$ISERR(tSC)
	
	set tSC=..UpdateSetting(,"Notify Seller","From",..#EmailAddress) b:$$$ISERR(tSC)
	set tSC=..UpdateSetting(,"Notify Seller","SMTPServer",..#EmailServer) b:$$$ISERR(tSC)
	set tSC=..UpdateSetting(,"Notify Seller","SMTPPort",..#EmailPort) b:$$$ISERR(tSC)
	set tSC=..UpdateSetting(,"Notify Seller","SSLConfig",SSLConfig) b:$$$ISERR(tSC)
	set tSC=..UpdateSetting(,"Notify Seller","Credentials",..#Credentials) b:$$$ISERR(tSC)
	
	
	#; set tSC=..UpdateSetting(,"X12 Email Notification","EmailAddresses",..#EmailAddress) b:$$$ISERR(tSC)
	#; set tSC=..UpdateSetting(,"X12 Email Notification","From",..#EmailAddress) b:$$$ISERR(tSC)
	#; set tSC=..UpdateSetting(,"X12 Email Notification","SMTPServer",..#EmailServer) b:$$$ISERR(tSC)
	#; set tSC=..UpdateSetting(,"X12 Email Notification","SMTPPort",..#EmailPort) b:$$$ISERR(tSC)
	#; set tSC=..UpdateSetting(,"X12 Email Notification","SSLConfig",SSLConfig) b:$$$ISERR(tSC)
	#; set tSC=..UpdateSetting(,"X12 Email Notification","Credentials",..#Credentials) b:$$$ISERR(tSC)

	Do ##class(Ens.Director).UpdateProduction()
	quit $$$OK
}

ClassMethod UpdateSetting(pProduction As %String = "BestOffer.Production", pHost As %String, pSetting As %String, pValue As %String) As %Status
{
   Do ##class(Ens.Config.Item).NameExists(pProduction, pHost, .tItemId)
   Set tItem = ##class(Ens.Config.Item).%OpenId(tItemId,,.tSC)
   #Dim tSetting As Ens.Config.Setting
   Set tSetting = tItem.FindSettingByName(pSetting)
   Set tSetting.Value = pValue
   Set tSC = tItem.%Save()
   Quit tSC
}

/// This should only be run once per instance unless users are unique across namespaces
/// Note also creates the Email SSL config used by the email BO
ClassMethod BuildEnsembleUsers() As %Status
{
	///Create Ensemble User definitons for Seller and Buyer users
	set oldnamespace=$ZNspace
	zn "%sys"
	set tSC=##class(Security.SSLConfigs).Create(..#SSLConfig) break:$$$ISERR(tSC)
	set tSC=##class(Security.Users).Create(..#BuyerName,"%All","xxx") break:$$$ISERR(tSC)
	set tSC=##class(Security.Users).Create(..#SellerName,"%All","xxx") break:$$$ISERR(tSC)
	set tSC=##class(Security.Users).Create(..#X12Name,"%All","xxx") break:$$$ISERR(tSC)
	zn oldnamespace
	quit tSC
}

/// Run this once per namespacedo
/// Creates email credentials and workflow users/roles
ClassMethod BuildWFUsers() As %Status
{
	set tSC=##class(Ens.Config.Credentials).SetCredential(..#Credentials,..#EmailAddress,..#EmailPassword) break:$$$ISERR(tSC)

	set tSC=##class(EnsLib.Workflow.RoleDefinition).CreateRole("Buyer Acknowledgement") break:$$$ISERR(tSC)
	set tSC=##class(EnsLib.Workflow.RoleDefinition).CreateRole("Buyer Bid Response") break:$$$ISERR(tSC)
	set tSC=##class(EnsLib.Workflow.RoleDefinition).CreateRole("Review Buyer Bid") break:$$$ISERR(tSC)
	set tSC=##class(EnsLib.Workflow.RoleDefinition).CreateRole("X12 Item Approval") break:$$$ISERR(tSC)
	
	///Create Buyer user and link Buyer roles
	set tSC=##class(EnsLib.Workflow.UserDefinition).CreateUser(..#BuyerName) break:$$$ISERR(tSC)
	set tSC=##class(EnsLib.Workflow.RoleDefinition).AddUserToRole("Buyer Bid Response",..#BuyerName) break:$$$ISERR(tSC)
	set tSC=##class(EnsLib.Workflow.RoleDefinition).AddUserToRole("Buyer Acknowledgement",..#BuyerName) break:$$$ISERR(tSC)

	///Create Seller user and link Seller role
	set tSC=##class(EnsLib.Workflow.UserDefinition).CreateUser(..#SellerName) break:$$$ISERR(tSC)
	set tSC=##class(EnsLib.Workflow.RoleDefinition).AddUserToRole("Review Buyer Bid",..#SellerName) break:$$$ISERR(tSC)

	///Create X12  user and link X12 role
	set tSC=##class(EnsLib.Workflow.UserDefinition).CreateUser(..#X12Name) break:$$$ISERR(tSC)
	set tSC=##class(EnsLib.Workflow.RoleDefinition).AddUserToRole("X12 Item Approval",..#X12Name) break:$$$ISERR(tSC)

	// update UnknownUser role
	set oldnamespace=$ZNspace
	zn "%sys"
	set tSC=##class(Security.Users).AddRoles("UnknownUser","%All")
	zn oldnamespace

	quit tSC
}

/// Build out the base classes for the BestOffer app
/// Can be run repeatedly
/// TODO: Cleanup existing worklists and tasks from previous runs
ClassMethod BuildData() As %Status
{
	///Drop the data from the tables, and reset the OID (object ID) counter so we 
	///always recreate OIDs from number 1 so we can hack it further down
	write ##class(BestOffer.Data.Item).%KillExtent(),!
	write ##class(BestOffer.Data.Buyer).%KillExtent(),!
	write ##class(BestOffer.Data.Seller).%KillExtent(),!
	
	///Populate the 3 main classes with 10 objects each
	write ##class(BestOffer.Data.Seller).Populate(10),!
	#; write ##class(BestOffer.Data.Item).Populate(10),!
	write ##class(BestOffer.Data.Buyer).Populate(10),!
	
	//Force Buyer ID=1 to be Buyer Name, and Active, for workflow purposes
	set tBuyer=##class(BestOffer.Data.Buyer).%OpenId(1)
	set tBuyer.EmailAddress=..#EmailAddress
	set tBuyer.Contact=..#BuyerName
	set tBuyer.Active=1
	set tSC=tBuyer.%Save() b:$$$ISERR(tSC)
	kill tBuyer

	//Force Buyer ID=2 to be Active, for email and BPL test purposes
	set tBuyer=##class(BestOffer.Data.Buyer).%OpenId(2)
	set tBuyer.EmailAddress=..#EmailAddress
	set tBuyer.Active=1
	set tSC=tBuyer.%Save() b:$$$ISERR(tSC)
	

	//Force Seller ID=1 to be Seller Name, and Active, for workflow purposes
	set tSeller=##class(BestOffer.Data.Seller).%OpenId(1)
	set tSeller.EmailAddress=..#EmailAddress
	set tSeller.Contact=..#SellerName
	set tSeller.Active=1
	set tSC=tSeller.%Save()  b:$$$ISERR(tSC)
	
	quit tSC
}

/// Given time limit parameter in seconds , return timestamp when processing should stop
ClassMethod CalcTimeLimit(pTimeLimit As %Integer) As %Library.TimeStamp
{
	set now=$horolog                                   //current date and time since 12/31/1840  DDDDD,sssss  
	set nowseconds=now*86400+$piece(now,",",2)         //number of seconds since 12/31/1840
	set timelimit=nowseconds+pTimeLimit                //add 180 seconds (or value of parameter)
	set dollarH=timelimit\86400_","_(timelimit#86400)  //convert back to $hororolg
	quit $zdatetime(dollarH,3)                         //convert back to ODBC/%Timestamp format
}

ClassMethod TestEmail()
{
	#dim smtp as %Net.SMTP
	#dim auth as %Net.Authenticator
	#dim msg as %Net.MailMessage

	set smtp = ##class(%Net.SMTP).%New()
	set auth = ##class(%Net.Authenticator).%New()
	set msg = ##class(%Net.MailMessage).%New()

	set auth.UserName = "scott@bestoffer.org"
	set auth.Password = "bestofferdemo"

	set smtp.smtpserver = "192.168.250.3"
	set smtp.authenticator = auth
	#; set smtp.SSLConfiguration = "iRedmailSSL"
	set smtp.port = "25"

	set msg.From = "rich.taylor@intersystems.com"
	do msg.To.Insert("michael@mail.bestoffer.org")
	set msg.Subject = "test message"
	do msg.TextData.Write("This is a test message")

	set sc = smtp.Send(msg)
	do:$$$ISERR(sc) $System.Status.DisplayError(sc)
}

}
