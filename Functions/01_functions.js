// function name () {
//     console.log("A");
//     console.log("b");
//     console.log("h");
//     console.log("i");
//     console.log("s");
//     console.log("h");
//     console.log("e");
//     console.log("k");

// }

// name() call the function

// function sum(a ,b){

//     console.log(a + b);

// }

// sum(3,4)
// let us store sum(3,4) in a variable

// const res = sum(3, 4); // on runnning you will get the ouput 7

//  now log the result

// console.log("Result is :" , res);  // Here we get Result is : undefined , Why ? Because I you Have not write Return value

function sum(a, b) {
  // let result = a +b
  // return result

  // another method

  return a + b;
}

const result = sum(3, 7);

console.log("Result is :", result); // Now we will get the desired result

function login(user = "Sam") {
  // this will make sure that user will be never undefined if nothing is passed it will by default show "Sam" a sa user

  if (user === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${user} just logged in`;
}
console.log(login("ABHISHEK")); //Output is : ABHISHEK just logged in
console.log(login("")); //Output is :  just logged in
console.log(login()); //Output is : undefined just logged in , if nothing is passed it by default say undefined

// After initializing user = "Sam"

console.log(login()); // Ouput : Sam just logged in

//  If we want to get more value in  calculateCartPrice so will could use "rest" Operator

function calculateCartPrice(...num1) {
  // rest and spread syntax is same depens on the situation
  return num1;
}
console.log(calculateCartPrice(2, 5, 3, 5)); // Ouput is : [ 2, 5, 3, 5 ]

function calculateCartPrice(val1, val2, ...num1) {
  // result ?
  // rest and spread syntax is same depens on the situation
  return num1;
}

console.log(calculateCartPrice(200, 2000, 20000, 120)); // Ouput is : [ 20000, 120 ] because 200 , 2000 has been gone to val1 , val2 respectively and the rest of item is gone to num1 array

const user = {
  username: "Abhishek",
  age: 20,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and its age is ${anyobject.age}`
  );
}

//   handleObject(user)

//passing through objects
handleObject({
  username: "AKhil",
  age: 22,
});

const myNewArray = [200, 500, 100, 240];

function returnSecondvalue(getArray) {
  return getArray[1];
}
console.log(returnSecondvalue(myNewArray));
