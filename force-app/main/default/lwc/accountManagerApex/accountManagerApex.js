import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountManager.getAccounts';
import {ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class AccountManagerApex extends LightningElement {
    @track size = 0;
    accounts;
    error;
    numberOfAccounts; 

    handleInputChange(event) {
        this.numberOfAccounts = event.target.value;
    }

    getAccounts() {
        getAccounts({ NumberOfAccounts: this.numberOfAccounts })
            .then(result => {
                this.accounts = result;
                this.size = result.length;
                const Event = new ShowToastEvent({
                  title: 'Success',
                  message: this.size + ' Accounts data returned successfully!',
                  variant: 'success',
                });
                this.dispatchEvent(Event);
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.accounts = undefined;
                this.size = 0;
                const Event = new ShowToastEvent({
                  title: 'Error',
                  message: 'Error fetching accounts!',
                  variant: 'error',
                });
                this.dispatchEvent(Event);
            });
    }

    // @wire(getAccounts)
    // wiredAccounts({ error, data }) {
        // if (data) {
        //     this.accounts = data;
        //     this.size = data.length;
        //     this.error = undefined;
            
        //     // 🔍 Check your browser console to see the data!
        //     console.log('Accounts data returned successfully:', JSON.stringify(data));
        // } else if (error) {
        //     this.error = error;
        //     this.accounts = undefined;
        //     this.size = 0;
            
        //     // ❌ Check your browser console for errors!
        //     console.error('Error fetching accounts:', error);
        // }
    // }
}
