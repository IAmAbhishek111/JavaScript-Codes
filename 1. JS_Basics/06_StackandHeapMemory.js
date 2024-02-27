// Stack(primitive) and Heap memory (non primitive)

// in stack you get a copy of the variable
// in heap you get a reference of varaible

// let name = "Abhishek";

// let anothername = name

// anothername="aman"
// console.log(name)

// console.log(anothername)

let user = {
  email: "user@google.com",

  upi: "user@tsk",
};

let user2 = user;

user2.email = "abhi@google.com";
console.log(user2.email);
console.log(user.email);
