/* var markMass =  78;
var markHeight =  1.7;

var johnMass =  68;
var johnHeight =  1.7;

var markBmi = markMass / (markHeight * markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);

var isBmi = markBmi > johnBmi;
console.log('Is Mark\'s higher than John\'s?' + isBmi); */

var objectMark = {
    name: 'Mark',
    mass: 78,
    height: 1.7,
    BMICalc: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var objectJohn = {
    name: 'John',
    mass: 68,
    height: 1.7,
    BMICalc: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

console.log (objectMark.BMICalc(), objectJohn.BMICalc());

if (objectMark.BMICalc() > objectJohn.BMICalc()) {
    console.log (objectMark.name + ' has a higher BMI of ' + objectJohn.name);
} else if (objectJohn.BMICalc() > objectMark.BMICalc()) {
    console.log (objectJohn.name + ' has a higher BMI of ' + objectMark.name);
} else {
    console.log ('The BMI is the same');
}