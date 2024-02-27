// object literals

const mySym = Symbol("Key1");

const JsUser = {
  // Object created
  name: "Abhishek",
  age: 23,
  location: "Delhi",
  // mysym : "mykey1", // here it is not the right approach for accesing symbol in the object , actually when you log it it will give you tha value of the mysm "mykey1" but when you check rhe datatype it will be string , So the correct method is :
  [mySym]: "mykey1",
  email: "test@test.com",
  isloggedIn: "false",
  lastlogin: ["MOnday", "Saturday"],
};

// Accessing Object

// console.log(JsUser.email);
// console.log(JsUser["email"]); 

// console.log(JsUser[mySym]);

JsUser.email = "addy@000.com";
// Object.freeze(JsUser); // after this the value is loacked it will be not changed even after changing the value of the mail

// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`HELLO  ${this.name}`);
}

console.log(JsUser.greeting); //[Function (anonymous)]

console.log(JsUser.greeting()); // undefined

