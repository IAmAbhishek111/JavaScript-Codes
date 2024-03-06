//  creating Object Literal
const user = {
  //properties:

  usernmame: "Abhishek",
  loginCount: 8,
  signedIn: true,

  getuserDetails: function () {
    console.log("Got user details from database");
  },
};

// console.log(user.usernmame); // Abhishek
// console.log(user.getuserDetails()); // Got user details from database



function User(username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    return this;
}

const userone = new  User("Hitesh" , 12 ,true);
const usertwo = new  User("Abhishek", 11 , false);

console.log(userone); // now ouput is ovcerwriiten with the usertwo , which is nbt the good thing
//  so just add new before calling the function 
console.log(usertwo)
