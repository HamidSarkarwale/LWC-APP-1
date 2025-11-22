import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
    @track displayDiv = false;

    showDivHandler(event)
    {
        this.displayDiv = event.target.checked;
    }

    @track cityList = [
        {Name: 'New York', Population: 8398748},
        {Name: 'Los Angeles', Population: 3990456},
        {Name: 'Chicago', Population: 2705994},
        {Name: 'Houston', Population: 2320268},
        {Name: 'Phoenix', Population: 1680992}];
}