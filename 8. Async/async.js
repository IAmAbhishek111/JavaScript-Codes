// Settimeout()

const say = function () {
  console.log("Abhishek"); // it will printed after 2 seconds
};

const changeText = function () {
  document.querySelector("h1").innerHTML = "Best js Series";
};
const changeMe = setTimeout(changeText, 2000);

document.querySelector('#stop').addEventListener('click' , function(){
    clearTimeout (changeMe)
    console.log("Stopped"); // it will stop the events
})

// setInterval(() => {
//     console.log("Akhil") // it will print it after 2 seconds continously
// }, 2000);
