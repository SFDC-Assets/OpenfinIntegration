import api from '@salesforce/resourceUrl/openfin_salesforce_lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import { LightningElement, track } from 'lwc';

export default class OpenFinToSalesforce extends LightningElement {
    @track oftosfcontextInfo;

    async connectedCallback() {
      try {
        await loadScript(this, api);
      } catch (err) {
        console.warn('Failed to load static resource, has it been added in Salesforce org settings?');
        return;
      }
  
      window.fin.salesforce.initFinApiInLwc();
      //Code to Add context in SF for LWC to listen
      window.fin.me.interop.addContextHandler(handleInstrumentContext.bind(this), 'instrument');

      function handleInstrumentContext(contextInfo) {
        const { type, id } = contextInfo;
        console.log('contextInfo for instrument', contextInfo)
        this.oftosfcontextInfo = JSON.stringify(contextInfo, null, 2);
    }
    
  }
}
