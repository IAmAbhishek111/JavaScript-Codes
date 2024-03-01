const parent = document.querySelector(".parent");
console.log(parent);

// Ouput:
{
  /* <div class="parent">
        <div class="day">MON</div>
        <div class="day">TUE</div>
        <div class="day">WED</div>
        <div class="day">THURS</div>
        <div class="day">FRI</div>
        <div class="day">SAT</div>
        <div class="day">SUN</div>
    </div> */
}

console.log(parent.children); // you will get HTML collection

// console.log(parent.children[1].innerHTML); //<div class="day">TUE</div>

for (let index = 0; index < parent.children.length; index++) {
  const element = parent.children[index].innerHTML;
  console.log(element);
  //   // Output for line 23 :

  //   // MON;
  //   // TUE;
  //   // WED;
  //   // THURS;
  //   // FRI;
  //   // SAT;
  //   // SUN;
}

parent.children[1].style.color = "orange";
// console.log(parent.firstElementChild); // <div class="day">MON</div>
// console.log(parent.lastElementChild);

const dayOne = document.querySelector(".day");

console.log(dayOne); // <div class="day">MON</div>

console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling); //<div class="day" style="color: orange;">TUE</div>

console.log("Nodes", parent.childNodes);

//Ouptu for line 46:
// It is tree Structure no of element of in node list is 2*i + 1
// here i =7 node list = 2*7 + 1  = 15
// NodeList(15) [text, div.day, text, div.day, text, div.day, text, div.day, text, div.day, text, div.day, text, div.day, text]

// 0 : text
// 1: div.day
// 2 : text
// 3 : div.day
// 4  : text
// 5:div.day
// 6: text
// 7 : div.day
// 8: text
// 9: div.day
// 10: text
// 11:div.day
// 12:text
// 13: div.day
// 14: text
// length: 15


//  IN next part we will study how to create new element
