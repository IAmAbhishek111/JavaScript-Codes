// const bal = new Number(100); // IT WILL SURELY LOG NUMBER nothing else

// console.log(bal); // it will cast in number only in console

// console.log(bal.toString());
// console.log(bal.toFixed(2)); // it will provide precision upto 2 decimals

// console.log(typeof bal);

// const otherNum = 23.6543

// console.log(otherNum.toPrecision(3)); // round of

// const hundreds = 1000000000

// console.log(hundreds.toLocaleString('en-IN')); // it will provide comma to ease to find no of zeroes by default it is in US standards

// // Number.MAX_VALUE
// // Number.MIN_SAFE_INTEGER
// // Number.MIN_VALUE
// // Number.MAX_VALUE
// Number.MAX_VALUE

// *******************************Maths****************

console.log(Math); // it is object with different value

console.log(Math.abs(-8)); // change -ve to +ve
console.log(Math.round(4.3)); // round off
console.log(Math.ceil(4.2)); // if the number is just above 4 it will output 5

console.log(Math.floor(5.4)); // it will give floor value that is before decimal(5)

console.log(Math.sqrt(54).toFixed(2));

console.log(Math.random()); // it will  give value only between 0 to 1 randomly

console.log(Math.random() * 10 + 1); // it is use to handle the 0 Case so it will get min val 1

const min = 10;
const max = 20;

// i want value between 10 and 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // try to remember for having range
