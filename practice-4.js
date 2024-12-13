/**
 * Write an arrow function where it will do the following:
 * (a)It will take two array inputs
 * (b) combine the two arrays and assign them in a new array
 * (c)Find the maximum number from the new array and return the result.
 * 
 * print the result
 */

const getMaxValue = (arr1, arr2) =>{
  const newArray = [...arr1, ...arr2];
  console.log(newArray);
  
  const maxValue = Math.max(...newArray);
  return maxValue;
}
console.log(getMaxValue([3, 4, 6], [5, 67, 85, 92,4,3]));
