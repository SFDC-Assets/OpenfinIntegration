import { LightningElement } from 'lwc';
import api from '@salesforce/resourceUrl/openfin_salesforce_lwc';
import { loadScript } from 'lightning/platformResourceLoader';

export default class SalesforceToOpenFin extends LightningElement {

      clickedButtonLabel;
      tickerValue = "TSLA";
  
      handleClick(event) {
          this.clickedButtonLabel = event.target.label;
          console.log(this.tickerValue);
          //Code to Set context to send info from  SF to  Openfin 
          window.fin.me.interop.setContext({type: 'instrument', id: {ticker:this.tickerValue}})
      }
      handleChange(event) {
        this.tickerValue = event.target.value;
      }

    async connectedCallback() {
      try {
        await loadScript(this, api);
      } catch (err) {
        console.warn('Failed to load static resource, has it been added in Salesforce org settings?');
        return;
      }
  
      window.fin.salesforce.initFinApiInLwc();

    }   
  }