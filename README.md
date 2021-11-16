# OpenfinIntegration
Before running 

app.json , salesforce-view.json and aura files are in OpenfinIntegration/openfinIntegratiionv4/OpenfinSalesforceInterop directory 

Openfin side
  -  app.json , preload.js ,salesforce-view.json that should be in appropriate path for webserver to load ( in windows it will be in public folder) 
 
  
 Salesforce side 
 - Load api.js as static resource
 - Install Aura 
 - Make sure the AURA code has reference to static resource
 - Create Console app and Embed Aura component  in the console utility bar
 - Install Apex controller openfinSFDataRetriever.cls file
  
  
Running openfin and salesforce
 - openfin  -l -c app.json
  - login if required 
   - Go to Console app 
   - Click on utility app
   - Reload SF side 
   - Colour code it 
   - Communication should work 
   
