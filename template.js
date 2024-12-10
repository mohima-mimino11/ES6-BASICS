const first = "mimino";
const last = "codingbee";
const greet = "Beep Beep Boop Beep";

const name = first + ' ' + last + ' ' + greet;
console.log(name);
const a = 10;
const b = 20;
const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
console.log(result);
// string interpolation : dynamic variable writing inside strings
// const mathResult = `The sum of ${a} and ${b} is ${a+b}`;
const numbers = [45, 867, 893, 3];
const student = {name:'John Cena', age:5};
const mathResult = `The sum of ${numbers[0]} and ${student.age} is ${numbers[0] + student.age}`;

console.log(mathResult);


const email = 'Hi John \n' +
'cena cena lage\n' +
'tumi mara mari korba naki';
console.log(email);
// multi-line strings
const challange = `John Cena
cena naki ochena
mair dimu prochur`;
console.log(challange);
