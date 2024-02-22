// const userEmail = "abhi.com";

// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("Don't have user email");
// }

// falsy value :
// false , 0 , -0 , BigInt  0n , "" , null , undefined , NaN

// truthy values:
// "0" , 'false' , " ", [] , {} ,  function (){}

// false == 0 : true
// false == "0" true
//  0 == '' true

// Nullish Coalescing operator (??) : null , undefined

let val1;
// val = 5 ?? 10
// val = null ?? 10

val1 = undefined ?? 15
val1 = undefined ?? 10 ?? 20  // ouput :10
console.log(val1);

