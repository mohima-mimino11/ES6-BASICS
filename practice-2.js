/**
 * Write an arrow function where it will do the following:
 * (a)It will take an array where the array elements will be the name of your friends.
 * (b)Check if the length of each element is even, push elements with even length to a new array and return result
 * print the result.
 */

const friends = (arr=[]) =>{
  const newArr = [];
  for(const friend of arr){
    if(friend.length % 2 === 0){
      newArr.push(friend)
    }
  }
  return newArr;
}

console.log(friends(['Era', 'Habib', 'Mahi', 'Samia', 'Robin', 'Khadiz']));
