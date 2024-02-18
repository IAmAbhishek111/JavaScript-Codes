// ******************************DATES**************************************

// let myDate = new Date(); // this will give the date and time of that instance

// console.log(myDate.toString()); //Sun Feb 18 2024 10:52:12 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()); // Sun Feb 18 2024
// console.log(myDate.toLocaleDateString()); // 2/18/2024
// console.log(myDate.toLocaleString()); //2/18/2024, 10:52:12 AM

// console.log(typeof myDate);  // it is object in datatype

// Creating a custom Date:
// let CreatedDate = new Date(2024 , 0, 23) // 2024 is year 0 is index of mmonth JAN starts with 0 index and so on end at Dec with 11 index and 23 is Date

// console.log(CreatedDate.toDateString()); //Output is : Tue Jan 23 2024

// let CreatedDate = new Date(2024, 0, 23, 5, 14, 30); // the 4th parameter is hours (5) then minutes(14) than seconds (30)

// console.log(CreatedDate.toLocaleString()); // output is : 1/23/2024, 5:14:30 AM

// Creating time stamps :



// let myTimeStamp =  Date.now()
// console.log(myTimeStamp); // will give in millisec

// console.log(Math.floor(Date.now()/1000)) // coverted to secs

let newDate = new Date()

// console.log(newDate.getDate());
// console.log(newDate.getDay);
// console.log(newDate);

// newDate.toLocaleString('default',{ 
//     weekday : "long",
//     timeZone:''
// })