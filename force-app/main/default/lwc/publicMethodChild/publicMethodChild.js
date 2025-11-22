import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @track value = ['red'];

    options = [
            { label: 'Red Marker', value: 'red' },
            { label: 'Blue Marker', value: 'blue' },
            { label: 'Green Marker', value: 'green' },
            { label: 'Black Marker', value: 'black' }
    ];

    @api
    selectedCheckbox(checkboxValue)
    {
        const selectedCheckbox = this.options.find(option => option.value === checkboxValue);

        if(selectedCheckbox)
        {
            this.value = [selectedCheckbox.value];
            console.log(this.value);
            return "successfully checked";
            
        }

        return "Checkbox not found";
        
    }

}