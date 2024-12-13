/**
 * Write an arrow funtion where it will do the following:
 * (a)square each array element
 * (b)Calculate the sum of squared elements
 * (c)return the average of sum of squared elements
 * print the result
 */

const squaredSum = (arr) => {
  let sum = 0;
  for(const item of arr){
    let squaredItem = item ** 2;
    // console.log(squaredItem);
    sum = sum+ squaredItem;
  }
  const average = sum / arr.length;
  return average;
}

console.log(squaredSum([2, 4, 3]));
