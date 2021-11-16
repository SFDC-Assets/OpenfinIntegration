# OpenfinIntegration
Before running 
 

Openfin side - Look at openfinasset folder 
  -  app.json , preload.js ,salesforce-view.json that should be in appropriate path for webserver to load ( in windows it will be in public folder) 
 
  
 Salesforce side 
  -  Please install unlocked package 
       - sfdx force:package:install --package 04t1U000007Y8W4QAK --wait 10
       
   OR 
   
      - https://login.salesforce.com/packaging/installPackage.apexp?p0=04t1U000007Y8W4QAK

NOTE ::  Please change the field name in OpenfinSFDataRetriever as per your need 
  - For Example ::if you are using FSC managed package please change apex class file OpenfinSFDataRetriever to use ECN_pc 
  
  
Running openfin and salesforce
 - openfin  -l -c app.json
  - login if required 
   - Go to Console app 
   - Click on utility app
   - Reload SF side 
   - Colour code it 
   - Communication should work 
   
