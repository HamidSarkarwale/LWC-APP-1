import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track firstNumber;
    @track secondNumber;
    @track result;
    @track previousResult = [];
    @track showPreviousResults = false;

    firstNumberChangeHandler(event)
    {
        this.firstNumber = event.target.value;
    }
    
    secondNumberChangeHandler(event)
    {
        this.secondNumber = event.target.value;
    }
    
    addHandler(event)
    {
        this.result = `Result of ${parseInt(this.firstNumber)}+${parseInt(this.secondNumber)} is ${parseInt(this.firstNumber) + parseInt(this.secondNumber)}` ;
        this.previousResult.push(this.result);
    }

    subtractHandler(event)
    {
        this.result = `Result of ${parseInt(this.firstNumber)}-${parseInt(this.secondNumber)} is ${parseInt(this.firstNumber) - parseInt(this.secondNumber)}` ;
        this.previousResult.push(this.result);
    }

    multiplyHandler(event)
    {
        this.result = `Result of ${parseInt(this.firstNumber)}x${parseInt(this.secondNumber)} is ${parseInt(this.firstNumber) * parseInt(this.secondNumber)}` ;
        this.previousResult.push(this.result);
    }

    divideHandler(event)
    {
        this.result = `Result of ${parseInt(this.firstNumber)}/${parseInt(this.secondNumber)} is ${parseInt(this.firstNumber) / parseInt(this.secondNumber)}` ;
        this.previousResult.push(this.result);
    }

    showPreviousResultsHandler(event)
    {
        this.showPreviousResults = event.target.checked;
    }

}