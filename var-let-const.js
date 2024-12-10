// var: no reason to use var
// let: allow it to reassign
// const: do not allow it to reassign

const money = 25;
// money = 50;
const rich = money + 25;
console.log(rich);


let count = 0;
count = count + 10;
console.log(count);

const numbers = [23, 4, 6,89];
// numbers = [4,5,8];
numbers[1] = 33;
numbers.push(87, 12, 178)
console.log(numbers);

const student = {
  name:'miminoi',
  class:12
}
student.name = 'mimino codingbee'
console.log(student);
// loop
let sum = 0;
for(let i = 0; i < 10; i++){
    const num = i;
    sum = sum + num;
}

console.log(sum);
