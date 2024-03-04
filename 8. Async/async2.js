let intervalID;
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

document.getElementById("start").addEventListener("click", () => {
  intervalID = setInterval(() => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;

    console.log(rndCol);
  }, 1000);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(intervalID);
  intervalID = null;
  console.log(intervalID);
});
