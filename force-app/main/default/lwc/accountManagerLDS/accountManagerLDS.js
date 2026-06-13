import { LightningElement, track, wire } from 'lwc';
import {createRecord, getRecord} from 'lightning/uiRecordApi';


export default class AccountManagerLDS extends LightningElement 
{
    @track Name = '';
    @track Phone = '';
    @track Website = '';
    @track AccountId = '';

    handleAccountNameChange(event)
    {
        this.Name = event.target.value;
    }

    handleAccountPhoneChange(event)
    {
        this.Phone = event.target.value;
    }

    handleAccounturlChange(event)
    {
        this.Website = event.target.value;
    }

    handleSaveAccount() {
        // Save logic will go here
        const AccountFields = {
            'Name': this.Name,
            'Phone': this.Phone,
            'Website': this.Website
        };

        const recordInput = { apiName: 'Account', fields: AccountFields };

        createRecord(recordInput)
            .then(account => {
                console.log('Account created with Id: ' + account.id);
                this.AccountId = account.id; // Store the created Account Id
                // Optionally, reset the form fields here
                this.Name = '';
                this.Phone = '';
                this.Website = '';
            })
            .catch(error => {
                console.error('Error creating account: ', error.body.message);  
            });  
    }

    @wire(getRecord, { recordId: '$AccountId', fields: ['Account.Name', 'Account.Phone', 'Account.Website'] })
    accountRecord;

    get name() {
        return this.accountRecord.data ? this.accountRecord.data.fields.Name.value : '';
    }

    get phone() {
        return this.accountRecord.data ? this.accountRecord.data.fields.Phone.value : '';
    }

    get website() {
        return this.accountRecord.data ? this.accountRecord.data.fields.Website.value : '';
    }

    

}