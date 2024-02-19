// const user = {
//   username: "Abhishek",
//   price: 999,

//   welcomeMessage: function () {
//     console.log(`${this.username} , welcome to website`);
//     // console.log(this); // current value of the variables
//   },
// };

// this keyword refered to current context

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage(); // Output : Sam , welcome to website , bcz Sam is current context

// console.log(this); // ouput empty object in node environment

// in browser , window is global object

// function one() {
//     let name = "Abhishek"

// console.log(this.name); //  in function this keyword doesnt work
// }

// one()

// const one = function()
// {
//     let name = "Abhishek"
//     console.log(this.name);
// }

// const one = () =>{
//     let username = "Abhihshek"
//     console.log(this.username);
// }

// one()  //Ouptut : undefined

// const addTwo= (num1 , num2) => {
//     return num1 + num2
// } if used curly braces then return is used always

// implicit return

// const addTwo = (num1, num2) => (num1 + num2); // if parenthesis is used no return is used


const addTwo = (num1, num2) => ({username : "Abhishek"}); // if parenthesis is used no return is used
console.log(addTwo(3, 4));
