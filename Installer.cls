Include %occInclude

Class App.Installer
{

XData MyInstall [ XMLNamespace = INSTALLER ]
{
<Manifest>
  <Default Name="NAMESPACE" Value="BestOffer"/>
  <Default Name="DBNAME" Value="BestOffer"/>
  <Default Name="APPPATH" Dir="/opt/app/" />
  <Default Name="SOURCESPATH" Dir="${APPPATH}src" />
  <Default Name="RESOURCE" Value="%DB_${DBNAME}" /> 
  <Default Name="BuyerName" Value="Scott" />
  <Default Name="SellerName" Value="Michael" />
  <Default Name="X12Name" Value="Roberto" />
  <Default Name="UserPwd" Value="xxx" />
  <Default Name="EmailServer" Value="smtp.gmail.com" />
  <Default Name="SSLConfig" Value="Email" />
  <Default Name="EmailPort" Value="465" />
  <Default Name="Credentials" Value="Email" />
  <!-- Update email credentials for your needs -->
  <Default Name="EmailAddress" Value="richtaylor0420@gmail.com" />
  <Default Name="EmailPassword" Value="imtuhdelmgewcpwi" />

  <!-- Define users -->
  <User Username="${BuyerName}" PasswordVar="UserPwd" Roles="%All" />
  <User Username="${SellerName}" PasswordVar="UserPwd" Roles="%All" />
  <User Username="${X12Name}" PasswordVar="UserPwd" Roles="%All" />

  <Namespace Name="${NAMESPACE}" Code="${DBNAME}-CODE" Data="${DBNAME}-DATA" Create="yes" Ensemble="1">
    <Configuration>
      <Database Name="${DBNAME}-CODE" Dir="${APPPATH}${DBNAME}-CODE" Create="yes" Resource="${RESOURCE}"/>
      <Database Name="${DBNAME}-DATA" Dir="${APPPATH}${DBNAME}-DATA" Create="yes" Resource="${RESOURCE}"/>
    </Configuration>

    <!--<ClassMapping Package="App" From="USER" /> -->
    <Import File="${SOURCESPATH}" Recurse="1"/>

    <Production name="BestOffer.Production" AutoStart="1"/>

    <Invoke Class="BestOffer.Util.Utils" Method="FixProduction" CheckStatus="1" />
    <Invoke Class="BestOffer.Util.Utils" Method="BuildWFUsers" CheckStatus="1" />
    <Invoke Class="BestOffer.Util.Utils" Method="BuildData" CheckStatus="1" />
    <Invoke Class="Ens.Director" Method="SetAutoStart" CheckStatus="0">
      <Arg Value="BestOffer.Production" />
    </Invoke>
  </Namespace>
  <Namespace Name="%SYS" Create="no">
      <Invoke Class="Security.SSLConfigs" Method="Create" CheckStatus="1">
        <Arg Value="${SSLConfig}" />
      </Invoke>
  </Namespace>
  <Namespace Name="USER" Create="no">
      <Invoke Class="App.Installer" Method="CreateWebApp" CheckStatus="1">
        <Arg Value="${NAMESPACE}" />
      </Invoke>
  </Namespace>
 
</Manifest>
}

ClassMethod setup(ByRef pVars, pLogLevel As %Integer = 3, pInstaller As %Installer.Installer, pLogger As %Installer.AbstractLogger) As %Status [ CodeMode = objectgenerator, Internal ]
{
  Quit ##class(%Installer.Manifest).%Generate(%compiledclass, %code, "MyInstall")
}

/// had to create a method to build the web application as the
/// Manifest tag <CSPApplication> does not provide a way to supply
/// a dispatch class for a RESTful end point.
/// This will also update the default namespace to have 
ClassMethod CreateWebApp(DefaultNamespace As %String) As %Status
{
  new $Namespace
  set $Namespace = "%SYS"
  write "Create bestoffer web application ...",!
  set webName = "/bestoffer/api"
  set webProperties("NameSpace") = "BESTOFFER"
  set webProperties("Enabled") = 1
  set webProperties("AutheEnabled") = "64"
  set webProperties("DispatchClass") = "BestOffer.Util.RESTShell"
  set status = ##class(Security.Applications).Create(webName, .webProperties)
  write:'status ##class(%System.Status).DisplayError(status)
  write "Web application "_webName_" was created!",!

  write "Create bestofferui web application ...",!
  set webName = "/bestofferui"
  kill webProperties
  set webProperties("NameSpace") = "BESTOFFER"
  set webProperties("Enabled") = 1
  set webProperties("AutheEnabled") = "64"
  set webProperties("Path") = "/usr/irissys/csp/bestofferui"
  set webProperties("CSPZENEnabled") = 1
  set status = ##class(Security.Applications).Create(webName, .webProperties)
  write:'status ##class(%System.Status).DisplayError(status)
  write "Web application "_webName_" was created!",!

  // Also up date the Analytics flag of the default namespace.  This setting
  // is not available in the Installer Manifest <namespace> tag
  set webAppName = "/csp/"_$ZConvert(DefaultNamespace,"L")
  write "Updating Analytics flag in "_webAppName_" web application",!
  set webApp = ##class(Security.Applications).%OpenId(webAppName,,.tSC)
  if $$$ISOK(tSC) {
    set webApp.DeepSeeEnabled = 1
    set tSC = webApp.%Save()
    if $$$ISERR(tSC) {
      write "*** error in updating Web Application ***"
      do $System.Status.DisplayError(tSC)
      write !,!,"Please update the web application manually",!
    }
  } else {
    write "*** error in updating Web Application ***"
    do $System.Status.DisplayError(tSC)
    write !,!,"Please update the web application manually",!
  }

  quit status
}

}
