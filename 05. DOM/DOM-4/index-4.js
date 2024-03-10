function addLang(langName) {
  const li = document.createElement("li");

  li.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(li);
}
addLang("cpp");
addLang("ts");
addLang("python");

// it will create a problem related to memory optimisation bcz when you will add large element it will tarverse again and again

// optimised approach

function optAddLang(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(li);
}

optAddLang("Java");

// Editing

const secondLang = document.querySelector("li:nth-child(2)");

const newLi = document.createElement("li");
newLi.textContent = "c sharp";
secondLang.replaceWith(newLi);

// edit :

const firstLang = document.querySelector("li:first-child");

firstLang.outerHTML = "<li>Ruby</li>";

// remove

const removeEle = document.querySelector("li:last-child");

removeEle.remove();
