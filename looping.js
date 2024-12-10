// for of use on array or strings but not in object
// for in use on object 


const numbers = [2, 4, 6, 8, 99];

for(const num of numbers){
  // console.log(num);
  
}

const nobab = 'Siraj Ud Dulla';
for(const char of nobab){
  // console.log(char);
}

const glass = {
  name:'glass',
  color: 'golden',
  price : 12,
  isCleaned: true
}

// for(const key of  glass){
//   console.log(key);
  
// }

for(const key in  glass){
  const value = glass[key]
  // console.log(key, value);
  
}

// optional
const keys = Object.keys(glass);

console.log(keys);

for(const key of keys){
  const value = glass[key]
  console.log(key, value);
  
}