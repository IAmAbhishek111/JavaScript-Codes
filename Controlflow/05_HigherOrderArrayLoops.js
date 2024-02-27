//  For of loop

const myArray = [1, 2, 3, 4, 5];
for (const num of myArray) {
//   console.log(num); // it will take care of everything
}


// Maps :

const map = new Map() // it hold key value pair and only have unique 
map.set('IN' , "India")
map.set('US' , "United Sates of America")
map.set('Fr' , "France")
map.set('IN' , "India") // it will not print again because it has been already printed once and order will be same


// console.log(map);

// for (const [key , value] of map) {
//  console.log(key , ":-" , value);
// }


const myObject = {
    js : 'Javacript',
    cpp :'C++',
    py :"Pyhton",
    cs : "C-sharp",



}

// for (const key in myObject){
//     console.log(`The key is ${key} for ${myObject[key]} `);
// }

// can i use for in lopp of array :

// const programming = ["js" , "py" , "cpp", "cs"]

// for (const key in programming) {
//    console.log(programming[key]);  // it runs

// }


// for each loop:
const coding = ["js" , "CPP", "PY", "java"]

// in call back function there is not function name 

// coding.forEach(function (item) {
//     console.log(item);

// } )

// coding.forEach ( (call) =>{
//     console.log(call);


// })


function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)


const myCoding = [
    {
        languageName :"Javascript",
        filename : "js"
    },
    {
        languageName : "c++",
        filename : "cpp"
    },
    {
        languageName : "pyhton",
        filename : "py"
    }
]

myCoding.forEach( (val) =>{

    console.log(val.languageName);

})