const glass = {
  name:'glass',
  color: 'golden',
  price : 12,
  isCleaned: true
}

console.log(glass);
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
// console.log(keys);

const values = Object.values(glass);
// [ 'glass', 'golden', 12, true ]
// console.log(values);

const entries = Object.entries(glass);
// array of array or two dimensional array
// [
//   [ 'name', 'glass' ],
//   [ 'color', 'golden' ],
//   [ 'price', 12 ],
//   [ 'isCleaned', true ]
// ]
// console.log(entries);

// delete a property from object
// delete  glass.isCleaned;

const {isCleaned, ...shortGlass} = glass; // shows all other properties of the existing object without the mentioned one as it creates a new object with other properties
// console.log(shortGlass);

// freeze
// Object.freeze(glass);
Object.seal(glass)
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.color;
console.log(glass);


