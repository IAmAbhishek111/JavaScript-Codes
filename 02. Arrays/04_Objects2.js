// const tinderUser = new Object() it is singleton object

const tinderUser ={} //it is non-singleton object

 tinderUser.id = "123abc"
 tinderUser.name = "Sammy"
 tinderUser.isLoggedIn = false;


// console.log(tinderUser); // empty object


const regularuser = {
    email : "some@gmail.com",
    fullname :{
        userFullName :{
            firstname : "Abhishek",
            lastname : "Jha"
        }
    }
}


// console.log(regularuser.fullname); O/p " { userFullName: { firstname: 'Abhishek', lastname: 'Jha' } }"


const obj1 ={1 :"a" , 2 : "b"}
const obj2 = {3 : "A" , 4:"B"}

// const obj3 = Object.assign({},obj1,obj2) // to join the objects 

// Easy Way : Spread Operator
const obj3 = {...obj1 , ...obj2}
console.log(obj3); // it will merge 


const users = [
    {
    id : 1,
    email : "x@y.com"
}
, {
    id : 1,
    email : "x@y.com"

},{
    id : 1,
    email : "x@y.com"

},
]


// users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // use can access the key of the object 

// checking the property
console.log(tinderUser.hasOwnProperty('id'));