# OpenfinIntegration
Before running 

app.json , salesforce-view.json and aura are in OpenfinIntegration/openfinIntegratiionv4/OpenfinSalesforceInterop directory 

Openfin side
  -  app.json has reference to preload.js that should be in appropriate path for webserver to load
  -  
  
 Salesforce side
  Load api.js as static resource 
  Install Aura 
  Make sure the AURA code has reference to static resource
  Create Console app and Embed Aura component  in the console utility bar
  Install Apex controller openfinSFDataRetriever.cls file 
  
Running openfin and salesforce
 - openfin  -l -c app.json
  - login if required 
   - Go to Console app 
   - Click on utility app
   
