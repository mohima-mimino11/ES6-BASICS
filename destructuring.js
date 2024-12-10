const actor ={
  name:'Ananta',
  age: 30,
  phone: '01717783484534',
  money: 12235435436457
}
// if right side is an object left side of destructuring will be object as well
// use property name as a variable that contains the property value
const {phone, age: boyosh} = actor; //age property is aliased or changed 


// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age
console.log(phone);

console.log(boyosh);

// array destructuring
const numbers = [45,99];

const [first, second] = numbers;
const [x, y] = [12, 66]

// advanced
function doubleThem(a,b){
  return [a*2, b*2];
}

const [item1, item2] = doubleThem(6,3)
console.log(item1, item2);
console.log(doubleThem(6,9));

