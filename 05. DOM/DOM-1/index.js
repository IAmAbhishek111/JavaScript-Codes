let id = document.getElementById("title");
console.log(id); //<h1 id="title" class="heading" style="background-color: green; padding: 15px; border-radius: 20px;">Dom learning <span style="display:  none;">Text Test</span></h1>

id.style.backgroundColor = "green"; // turn the bg color to green

id.style.padding = "15px";

id.style.borderRadius = "20px";

console.log(id.innerHTML); // Full HTML  text is shown what was written on HTML page : "Dom learning <span style="display:  none;">Text Test</span>"

console.log(id.textContent); // Hided Text is also Available : "Dom learning Text Test"

console.log(id.innerText); //  visible text is only visible : 'Dom learning'



// ************************Query Selector******************************//

document.querySelector('h2') // it will give first occuring  h2 tag text

document.querySelector('#title') 
// <h1 id="title" class="heading" style="background-color: green; padding: 15px; border-radius: 20px;">Dom learning Part 1<span style="display:  none;">Text Test</span></h1>


document.querySelector('.heading')
{/* <h1 id="title" class="heading" style="background-color: green; padding: 15px; border-radius: 20px;">Dom learning Part 1<span style="display:  none;">Text Test</span></h1> */}

let input = document.querySelector('input')
input.style.backgroundColor= '#f5f5f5 '

const list = document.querySelector('ul') // give the list

console.log(list);


document.querySelectorAll('li')  //{ return the node list

// node list is somewhat like array :

// *********getelementbyclassname****************
const tempList= document.getElementsByClassName('list')

//  returns HTML Collection: {
//     "0": {},
//     "1": {},
//     "2": {},
//     "3": {}
// }

// tempList.forEach(function(li) {
//     console.log(li);
    
// });  gets the error :


// convert html collection



// Array.from(tempList)  converted to array now you can use forEach 