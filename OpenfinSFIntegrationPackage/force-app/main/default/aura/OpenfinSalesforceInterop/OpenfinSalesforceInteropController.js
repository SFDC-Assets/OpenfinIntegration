({
    scriptsLoaded : function(component, event, helper) {
        var oftosfcontextInfo;
        var setRecordval;

         window.fin.salesforce.initFinApiInLwc();
         //Code to Add context in SF for LWC to listen
         window.fin.me.interop.addContextHandler(handleInstrumentContext.bind(this), 'instrument');
   
         function handleInstrumentContext(contextInfo) {
            const { type, id } = contextInfo;
            console.log('contextInfo for instrument', contextInfo)
            oftosfcontextInfo = JSON.stringify(contextInfo, null, 2);
            component.set("v.myVal", oftosfcontextInfo);
            setRecordval = "";
            var oftosfcontextInfoJSON = JSON.parse(oftosfcontextInfo);
            var inputEcnNumber = oftosfcontextInfoJSON.id.ticker;
            console.log('inputEcnNumber  ', inputEcnNumber)          
            var action = component.get("c.getSFRecordID");
            action.setParams({
              "ecnID": inputEcnNumber
            });
            action.setCallback(this, function(response){
              var state = response.getState();
              if (state === "SUCCESS") {
                setRecordval = response.getReturnValue();
                console.log('setRecordval inside = ', setRecordval)  
                var workspaceAPI = component.find("workspace");
                if (setRecordval.length  > 0)
                {
                 workspaceAPI.openTab({
                  pageReference: {
                    "type": "standard__recordPage",
                    "attributes": {
                        "recordId":setRecordval,
                        "actionName":"view"
                    },
                    "state": {}
                  },
                  focus: true
                  }).catch(function(error) {
                  console.log(error);
                  });
                } 
              }
            });
            $A.enqueueAction(action);
          }
   },
   handleClick : function (cmp, event, helper) {
    var tickerValue  = cmp.get("v.sfmyVal");
      console.log(tickerValue);
      //Code to Set context to send info from  SF to  Openfin 
      window.fin.me.interop.setContext({type: 'instrument', id: {ticker:tickerValue}})
    },
    
    onTabFocused : function(component, event, helper) {
      console.log("Tab Focused");
      var focusedTabId = event.getParam('currentTabId');
      console.log("focustTabID value" +  focusedTabId);
      var workspaceAPI = component.find("workspace");
      var tickerValue  = "";
 
      workspaceAPI.getTabInfo({
          tabId : focusedTabId
        }).then(function(response) {
          var sftoftabinfo;
          sftoftabinfo = JSON.stringify(response, null, 2);
          console.log("focustTabID JSON response" + sftoftabinfo  );
          var sftoftabinfoJSON = JSON.parse(sftoftabinfo);
          var tabfocusedRecID = sftoftabinfoJSON.recordId;
          console.log("tabfocusedRecID value " +  tabfocusedRecID);
          var action = component.get("c.getECNNumber");
          action.setParams({
            "sfRecordID": tabfocusedRecID
           });
          action.setCallback(this, function(response){
          var state = response.getState();
          if (state === "SUCCESS") {
            tickerValue = response.getReturnValue();
            console.log("tickervalue  inside" + tickerValue);
            if (tickerValue.length > 0)
              window.fin.me.interop.setContext({type: 'instrument', id: {ticker:tickerValue}}) 
          }
        });
        $A.enqueueAction(action);              
      });
    }  


})
