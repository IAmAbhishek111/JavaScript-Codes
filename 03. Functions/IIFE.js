// Immediately Invoked Function Expression (IIFE)

(function one(){
    //named iife
  console.log('DB CONNECTED');
})
();  // IIFE SYNTAX , semicolon added


// iife is used for protecting function from polluting by the global scope.

( () => {
    console.log("DB CONNECTED 2");
})()  ;//it will not run so please add semicilon on the first function to stop it 

// How to pass the parameter in iife

( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
})('Abhishek')  // Here the things are called in the second bracket 

