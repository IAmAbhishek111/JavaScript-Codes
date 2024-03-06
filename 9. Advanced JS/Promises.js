// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const promise1 = new Promise(function (resolve, reject) {
  //Do an Async task
  // DB Calls
  //CryptoGraphy

  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promise1.then(function () {
  console.log("Pormise1 consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 is completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const Promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Abhishek", email: "test@test.com" });
  }, 1000);
});

Promise3.then(function (user) {
  console.log(user); //{ username: 'Abhishek', email: 'test@test.com' }
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Akhil", password: "123" });
    } else {
      reject("ERROR : Something went wrong");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);

    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Finally the promise is either resolved or rejected");
  });

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "js", password: "123" });
    } else {
      reject("ERROR : js went wrong");
    }
  }, 1000);
});

// Let us try second approach other then .then reponse :

async function consumePromiseFive() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })

  .catch((error) => console.log(error));

// Important ->  A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
