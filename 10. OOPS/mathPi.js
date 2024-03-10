// Object hav many projects:

const PI = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(PI); // it is universal:
// {
//     value: 3.141592653589793,
//     writable: false,  : it can never be true
//     enumerable: false,
//     configurable: false
//   }

const chai = {
  name: "Ginger Chai",
  price: 200,
  isAvailable: true,

  orderChai: function () {
    console.log("Code fat gya");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name")); // output : {
//     value: 'Ginger Chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

Object.defineProperty(chai, "name", { writable: false, enumerable: false });

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// {
//     value: 'Ginger Chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function")
    // to handle error
    console.log(`${key} : ${value}`); // TypeError: chai is not iterable
}
