// ***********************Array***********************

// Declaration:

// const myArr = [0,1,3,4,5] // 0-based indexing

// const Heroes = ["" , ""]

// const myArr2 = new Array(1,2,3,4)

// Array Methods

// myArr.push(6) // adds new elements  in the array
// console.log(myArr);

// myArr.pop() //  last elements are deleted from array
// console.log(myArr);

// let x =myArr.length // get length of array
// console.log(x)

// myArr.unshift(9)
// console.log(myArr) // this will push value at first index of the array , but it is not good practice

// myArr.shift() // it will delete element fron front

// console.log(myArr.includes(4)); // it will check whether 4 is there in array

// const newArr = myArr.join() // convert to string

// console.log(newArr); // it have string datatype

// slice:
// splice:

const myArr = [0, 1, 2, 3, 4, 5];

console.log("A", myArr);

const myn1 = myArr.slice(1, 3); //This method is used to get a new array by selecting a sub-array of a given array.

//The return value is new array with the values in the selected sub-array of the given array. The values in the range start to (end-1) will be selected.

console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3); //This method is used to add/remove an item from the given array.

//The return value is an array containing the deleted element.
console.log("C", myArr);

console.log(myn2);
