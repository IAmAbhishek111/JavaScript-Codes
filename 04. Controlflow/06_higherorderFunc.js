// map , filter , reduce:

// const coding = ["js" , "CPP", "PY", "java"]

// const value = coding.forEach ((item) =>{
//     console.log(item);

//     return item
// })

// console.log(value); // retutrn undefined :

// // foreach does not return the value


// *************************FILTER********************
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4)  // it return the value

// you are writing num > 4 in parethesis so remember to add return before it .

// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];

// let userBooks = books.filter((BK) => BK.genre === "Science");

// userBooks = books.filter((BK) => BK.publish > 1995 && BK.genre === "History");

// console.log(userBooks);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  const newNums = myNumbers.map( (num) =>  num + 10)
// console.log(newNums);

// [11, 12, 13, 14, 15,
// 16, 17, 18, 19, 20
// ]

//***************** Chaining : applying multiple methods simultaneoulsy************************ :

const newnums = myNumbers
  .map((nums) => nums * 10)
  .map((nums) => nums / 2)
  .filter((nums) => nums % 2 === 0)
  .filter((nums) => nums > 40);

// console.log(newnums);  // 50

// *************************Reduce******************** :

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];

const curr = 0;

// const currSum = array1.reduce(
//   (accumulator , currValue) => accumulator +currValue , curr

// )

// console.log(currSum);  //Output : 36

// accumulator takes curr in starting that is 0 and currValue is 1 the accumulator + currvalue is 0 +1 =1

// now accumulator will have the value of accumulator + currvalue that is 1 and currValue is 2 , so accumulator + currvalue is 1+2 = 3 and so on

//  let us visualise :

const myTotal = array1.reduce(function (acc, currVal) {
  let sum = acc + currVal;
  console.log(`acc: ${acc} and current Value: ${currVal} `);

  return sum;
}, curr);

console.log("total sum is:", myTotal);
// Output :

// acc: 0 and current Value: 1
// acc: 1 and current Value: 2
// acc: 3 and current Value: 3
// acc: 6 and current Value: 4
// acc: 10 and current Value: 5
// acc: 15 and current Value: 6
// acc: 21 and current Value: 7
// acc: 28 and current Value: 8
// total sum is: 36
