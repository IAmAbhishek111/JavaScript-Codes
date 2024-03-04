// document.getElementById("owl").onclick = function (){
//     alert("owl clicked")
// }  this is not that feasible approach we will move to modern approach

// attachevent method :

// Things to learn : type , timestamp  , defaultPrevented ,target , toelement , srcElement , currentTarget , clientX , clientY , screenX, screenY , altKey , ctrlKey,shiftKey , keyCode

// document.getElementById("images").addEventListener(
//   "click",
//   function (e) {
//     // e is event object
//     //   alert("owl clicked again");
//     console.log("1st: Clicked inside the UL");
//   },
//   false
// ); // false is bydefault

// document.getElementById("owl").addEventListener(
//   "click",
//   function (e) {
//     console.log("1st : OWL CLICKED");
//   },
//   false
// );
//   When you click owl ul will also activated :
// Output: OWL CLICKED , in next line : Clicked inside the UL

// it is because of event bubling : first it will output inside element then it will move outward

// document.getElementById("images").addEventListener(
//   "click",
//   function (e) {
//     // e is event object
//     //   alert("owl clicked again");
//     console.log("2nd : Clicked inside the UL");
//     e.stopPropagation(); // it will not  go down after only first statement will be printed
//   },
//   true
// );

// document.getElementById("owl").addEventListener(
//   "click",
//   function (e) {
//     console.log("2nd: OWL CLICKED");
//   },
//   true
// );

//   HERE the output is different first you will get : 2nd : Clicked inside the UL then , OWL CLICKED:

//  this is "event capturing " : it is basically top to down approach

// document.getElementById('google').addEventListener(
//   'click',
//   function (e) {
//     e.preventDefault();
//     e.stopPropagation()

//     console.log("Google clicked");
//   },
//   false
// );

// now we will have to remove all images if i click on this :

// target ul:

document.querySelector("#images").addEventListener(
  "click",
  function (e) {
    console.log(e.target.tagName);

    if (e.target.tagName === "IMG") {
      console.log(e.target.id);
      let removeIt = e.target.parentNode;
    // method 1 : preferred
      removeIt.remove();
    }
    // Here one problem occurs that if you press on any li item all the thing will get vanished because parentnode for li is ul so clicking on it will remove all li items :
    //  So we have to add conditions:
  },
  false
);
// removeIt.parentNode.removeChild(removeIt); method 2:
