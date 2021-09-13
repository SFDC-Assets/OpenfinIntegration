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
          // alert("You clicked: " + oftosfcontextInfo);
          component.set("v.myVal", oftosfcontextInfo);
          setRecordval = "0011U00000eALTNQA4";
          if (oftosfcontextInfo.includes("TSLA"))
              setRecordval = "0011U00001ufIgIQAU";
          if (oftosfcontextInfo.includes("CRM"))
            setRecordval = "0011U00001ufIh6QAE";
          if (oftosfcontextInfo.includes("AAPL"))
            setRecordval = "0011U00001ufIgcQAE";
          console.log('setRecordval  = ', setRecordval)  
          var workspaceAPI = component.find("workspace");
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
      workspaceAPI.getTabInfo({
          tabId : focusedTabId
      }).then(function(response) {
          var sftoftabinfo;
          sftoftabinfo = JSON.stringify(response, null, 2);
          console.log("focustTabID JSON response" + sftoftabinfo  );
          var tickerValue  = "";
            if (sftoftabinfo.includes("0011U00001ufIgIQAU"))
              tickerValue = "TSLA";
            if (sftoftabinfo.includes("0011U00001ufIh6QAE"))
              tickerValue = "CRM";
            if (sftoftabinfo.includes("0011U00001ufIgcQAE"))
              tickerValue = "AAPL";
          console.log("tickervalue" + tickerValue);
          //Code to Set context to send info from  SF to  Openfin 
          if (tickerValue.length > 0)
           window.fin.me.interop.setContext({type: 'instrument', id: {ticker:tickerValue}})
      });
  }

 


})
