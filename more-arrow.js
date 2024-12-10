const difference = (x, y) => x - y;

const multiply = (first, second, third) => first * second * third;

// single or one parameter
const getAge = (person) => person.age;
const student = {name: 'mimino', age: 23}
const age = getAge(student)
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([5, 9,88,2,14,12])
console.log(third);

const doubleIt = num => num * 2;
const double = doubleIt(4);
console.log(double);

// No parameter
const getPI = () => Math.PI;
console.log(getPI());

// large arrow function
const doMath = (x,y,z) =>{
  const sum = x + y + z;
  const mult = x * y * z;
  const result = sum + mult;
  return result;
}


console.log(doMath(2,5,7));
