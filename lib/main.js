const DOMNodeCollection = require("./dom_node_collection.js");

function $l(selector) {
  //Nodelist
  let nodeArray = [];
  // debugger
  if(selector instanceof HTMLElement) {
    // debugger
    nodeArray.push(selector);
  } else {
    const elementList = document.querySelectorAll(selector);
    nodeArray = Array.from(elementList);
  }
  return nodeArray;
}
window.$l = $l ;

var para = document.createElement("p");
console.log(para);
console.log(window.$l(para));
const h1 = window.$l("h1");
let dnc = new DOMNodeCollection(window.$l("li"));
let button = new DOMNodeCollection(window.$l("button"));
button.on("click", ()=> console.log("Clicked"));
button.off("click");

dnc.remove();


let name = document.getElementsByClassName("div-class");
