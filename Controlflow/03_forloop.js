// syntax

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

// }

// break and continue

for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    console.log("Detected Five"); // skips this condition
    continue;
  }
  console.log(`value of i is ${index}`);
}

for (let index = 0; index < 10; index++) {
  if (index == 5) {
    console.log("Detected Five");
    break; // here just loops break and it comes out of thr scope
  }
  console.log(`value of i is ${index}`);
}
