//  how to create element :

const div = document.createElement("div");
console.log(div); //<div></div>

//  Adding propertied to div

div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);

div.setAttribute("title", "generated Title");

div.style.backgroundColor = "green";
div.style.padding = "12px";

// div.innertext = "ABHISHEK" // it is not good for optimisation

const addText = document.createTextNode("Abhishek");
div.appendChild(addText); // <div class="main" id="8" title="generated Title" style="background-color: green; padding: 12px;">Abhishek</div>


document.body.appendChild(div)
