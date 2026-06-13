import { LightningElement, track } from 'lwc';

export default class AccountManagerLDSForms extends LightningElement 
{
    @track recordId;
    @track objectApiName = 'Account';

    handlesuccess(event) {
        this.recordId = event.detail.id;
    }
}