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


console.log(map);

for (const [key , value] of map) {
 console.log(key , ":-" , value);
}