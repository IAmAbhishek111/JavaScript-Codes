// Global Scope:
let a = 300;

if (true) {
  // block scope
  let a = 20;
  const b = 240;
  console.log("Block Scope value of a is :", a);
}

console.log("Global Scope value of a is:", a);

// Nested Scope

function one() {
  const username = "Abhishek";

  function two() {
    const website = "youtube";
    console.log(username); // it can access te username becuse for func "two()" func "one()" is global scope
  }
  //   console.log(website); // not accesible , line by line execution if here error take place then next line cant be executed

  two();
}
// one();

//************************************************ */
console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

console.log(addTwo(5)); // Error Takes place because "Cannot access 'addTwo' before initialization"
const addTwo = function (num) {
  return num + 2;
};
