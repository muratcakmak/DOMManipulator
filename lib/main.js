const DOMNodeCollection = require("./dom_node_collection.js");

var funcs = [];
document.addEventListener("DOMContentLoaded", () => {

  var para = document.createElement("p");
  console.log(para);
  console.log(window.$l(para));
  const h1 = window.$l("h1");
  let dnc = new DOMNodeCollection(window.$l("li"));
  let button = new DOMNodeCollection(window.$l("button"));
  button.on("click", ()=> console.log("Clicked"));
  // button.off("click");

  // dnc.remove();

  funcs.forEach( (fun)=>{
    fun();
  });

});


function $l(selector) {

  //Nodelist
  let nodeArray = [];
  if(selector instanceof HTMLElement) {
    nodeArray.push(selector);
  } else if(typeof selector === "string"){
    const elementList = document.querySelectorAll(selector);
    nodeArray = Array.from(elementList);
  }else if (typeof selector === "function") {
    if (document.readyState === "loading") {
      funcs.push(selector);
    }else if(document.readyState === "interactive" || document.readyState === "complete"){
      selector();
    }
  }
  return nodeArray;
}
window.$l = $l ;

//
//
// let name = document.getElementsByClassName("div-class");
