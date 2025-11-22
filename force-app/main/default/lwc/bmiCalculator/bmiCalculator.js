import { LightningElement, track} from 'lwc';

export default class BmiCalculator extends LightningElement {

    cardTitle = 'BMI Calculator';
    
    @track BMIData={
        weight: 0,
        height: 0,
        BMI: 0,
        BMIStatus: ''
    }

    onWeightChange(event){
        this.BMIData.weight = parseFloat(event.target.value);
    }

    onHeightChange(event){
        this.BMIData.height = parseFloat(event.target.value);
    }

    GetBMI(event){
        try
        {
            if(this.BMIData.weight == null || this.BMIData.height == null){
                throw new Error('Please enter weight and height');
            }  
            this.BMIData.BMI = (this.BMIData.weight / (this.BMIData.height * this.BMIData.height)).toFixed(2);

            if(this.BMIData.BMI < 18.5)
            {
                this.BMIData.BMIStatus = 'Underweight';
            }
            else if(this.BMIData.BMI >= 18.5 && this.BMIData.BMI <= 24.9)
            {
                this.BMIData.BMIStatus = 'Normal Weight';   
            }
            else if(this.BMIData.BMI >= 25 && this.BMIData.BMI <= 29.9)
            {
                this.BMIData.BMIStatus = 'Overweight';
            }
            else
            {
                this.BMIData.BMIStatus = 'Obese';
            }
        }
        catch(error)
        {
            console.log(error);
        }
    }
}