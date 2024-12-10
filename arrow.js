// function add(a,b){
//   const result = a + b;
//   return result;
// }

function add(a,b){
  return a + b;
}

// function expression
const add2 = function(a,b){
  return a + b;
}

// arrow function
const add3 = (a,b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
// const sum = add3(90, 55);
const sum = add4(3, 4, 5, 6);


console.log(sum);
