const Heroes = ["thor", "iromaman", "CaptainAmerica"];
const dc = ["Superman", "Batman", "Flash"];

// Heroes.push(dc)

// console.log(Heroes);
// console.log();

// let X = Heroes.concat(dc) // IT WILL MERGE TWO ARRAYS
// console.log(X)

// Another methods:

// use spread operators ...
const all_new = [...Heroes, ...dc];
console.log(all_new);

const another = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

let real = another.flat(Infinity); // it will spread all the element of arrays of arrays

console.log(real);

console.log(Array.isArray("Abhishek")); // False bcz it is not tha array

console.log(Array.from("Abhishek")); // It will comvert into array  [['A', 'b', 'h','i', 's', 'h','e', 'k']]

console.log(Array.from({ name: "Abhishek" })); // Intresting CASE : it will give empty array because it cant explicitly convert into array
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // it will make the array of the variables given
