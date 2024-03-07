function mutiplybyFive(num) {
  return num * 5;
}

mutiplybyFive.power = 2;

console.log(mutiplybyFive(5)); // o/p : 25
console.log(mutiplybyFive.power); // outout : 2
console.log(mutiplybyFive.prototype); // output : {}

// Function is also the object:
function createUser(usernmame, score) {
  this.usernmame = usernmame;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};
const chai = new createUser("chai", 25);
const coffee = createUser("Coffee", 50);

// it will make it confusing that who has called ? now make it this

chai.printMe();
// if you run this code now it will not run , it will give error : TypeError: Cannot read properties of undefined (reading 'printMe') but add new to handle error

// now output is : score is 25

/* Interview Perspective  READ IT:

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
