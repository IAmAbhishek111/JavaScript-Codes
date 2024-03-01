const form = document.querySelector("form");

// here we will use submit event

form.addEventListener("submit", function (e) {
  e.preventDefault(); // use to stop its default behaviour of submit ;
  const height = parseInt(document.querySelector("#height").value);
  console.log(height);
  const weight = parseInt(document.querySelector("#weight").value);
  console.log(weight);

  const results = document.querySelector("#results");

  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }

  if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    const bmiCategory = getBmiCategory(bmi);

    results.innerHTML = `<span>BMI: ${bmi}</span><br><span>Category: ${bmiCategory}</span>`;
  }
});
function getBmiCategory(bmi) {
  if (bmi < 18.6) {
    return "Under Weight";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    return "Normal Range";
  } else {
    return "Overweight";
  }
}
