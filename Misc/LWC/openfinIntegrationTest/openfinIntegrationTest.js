import api from '@salesforce/resourceUrl/openfin_salesforce_lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import { LightningElement, track } from 'lwc';

export default class OpenfinIntegrationTest extends LightningElement {
  @track appInfo;

  async connectedCallback() {
    try {
      await loadScript(this, api);
    } catch (err) {
      console.warn('Failed to load static resource, has it been added in Salesforce org settings?');
      return;
    }

    window.fin.salesforce.initFinApiInLwc();
    const app = await window.fin.Application.getCurrent();
    const info = await app.getManifest();
    this.appInfo = JSON.stringify(info, null, 2);
  }
}
