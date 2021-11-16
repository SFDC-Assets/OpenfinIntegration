# OpenfinIntegration
Before running 
 

Openfin side - Look at openfinasset folder 
  -  app.json , preload.js ,salesforce-view.json that should be in appropriate path for webserver to load ( in windows it will be in public folder) 
 
  
 Salesforce side 
  -  Please install unlocked package ( Aura Version - Why Aura not LWC see below) 
       - sfdx force:package:install --package 04t1U000007Y8W4QAK --wait 10     
   - OR 
      - https://login.salesforce.com/packaging/installPackage.apexp?p0=04t1U000007Y8W4QAK
 
    - NOTE ::  Please change the field name in OpenfinSFDataRetriever as per your need 
    - For Example ::if you are using FSC managed package please change apex class file OpenfinSFDataRetriever to use ECN_pc 
  
  - Create Console App (Preferred) 
  - if Console app Add Aura component as Utility Item 
  - if Standard app add Aura component on the Lightning page

  
Running openfin and salesforce togather 
 - openfin  -l -c app.json
  - login if required 
   - Go to Console app 
   - Click on utility app
   - Reload SF side 
   - Colour code it 
   - Communication should work 
   
How does  it work during run time 
  - Openfin loads preload.js and based on app.json and salesforce-view.json it will bring up Salesforce in openfin window
  - Openfin will preload  custom event and associate fin object  in system mode before salesforce is initialized and  locker is loaded  
            - Preload.js will do openfin fin object binding (CustomEvent.prototype.fin = window.fin)
            - Will work with current locker service and next gen lockerservice 
  - Once Salesforce is loaded, On salesforce side via static resource (part of unlocked package) we will import window.fin object 
  - Aura consumes that static resource and kicks of afterloadscript where we will intialize and bind instrument 
         - window.fin.salesforce.initFinApiInLwc();
         - window.fin.me.interop.addContextHandler(handleInstrumentContext.bind(this), 'instrument'

 Openfin to SF exchange
  - Aura will call function handleInstrumentContext(contextInfo) 
  - which will consume contextinfo (say ecn_id - aka Enterprise customer id /Global party id )
  - apex class will consume that ecn_id and identify salesforce record id 
  - workspaceAPI.openTab will open console tab with that recorid 

 SF to Openfin exchange
  - Aura will listen for tab focused event from console app via 
  - onTabFocused : function(component, event, helper)
  - extract Salesforce record_id
  - apex class will translate Salesforce record_id into ecn_id 
  - window.fin.me.interop.setContext({type: 'instrument', id: {ticker:tickerValue}}) 

Why Aura and not LWC 
- LWC does not support  Console Workspace API currently and the goal was to work for Console app and standard app 
- if you intend to deploy without console workspace AAPI then you can leverage LWC 
    -  See Misc folder to check out LWC code you can leverage 
