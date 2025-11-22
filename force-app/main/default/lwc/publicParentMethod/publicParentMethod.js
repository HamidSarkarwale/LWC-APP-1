import { LightningElement, track } from 'lwc';

export default class PublicParentMethod extends LightningElement {
    @track value;

    onChangeHandler(event)
    {
        this.value = event.target.value;
    }

    selectedCheckboxHandler()
    {
        const childComponent = this.template.querySelector('c-public-method-child');
        const returnedMessage = childComponent.selectedCheckbox(this.value);
        console.log(returnedMessage);
    }
}