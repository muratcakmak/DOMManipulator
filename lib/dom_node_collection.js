class DOMNodeCollection {
  constructor(htmlElements) {
    this.htmlElements = htmlElements;
  }
}

DOMNodeCollection.prototype.html = function (string) {
  if(string){
    this.htmlElements.forEach((el)=>{
      el.innerHTML = string;
    });
  }else{
    return this.htmlElements[0].innerHTML;
  }
};

DOMNodeCollection.prototype.empty = function () {
  this.htmlElements.forEach((el)=>{
    el.innerHTML = "";
  });
};

DOMNodeCollection.prototype.append = function(content){
  //TODO: Make it works for everthing
  //htmlelement and string
  if(typeof content === String){
    this.htmlElements.forEach( (el) => {
      el.innerHTML += content;
    });
  } else if (content instanceof HTMLElement ) {
    this.htmlElements.forEach( (el) => {
      el.innerHTML += content.outerHTML;
    });
  } else if (Array.isArray(content)) {
    content.forEach((cnt)=>{
      this.htmlElements.forEach( (el) => {
        el.innerHTML += cnt.outerHTML;
      });
    });
  }
};

DOMNodeCollection.prototype.attr = function () {
  this.htmlElements[0].getAttribute();
};

DOMNodeCollection.prototype.addClass = function (className) {
  this.htmlElements.forEach( (el) => {
    el.className += " " + className;
  });
};

DOMNodeCollection.prototype.removeClass = function (className) {
  this.htmlElements.forEach( (el) => {
    el.className = stringRemoval(el.className,className);
  });
};

function stringRemoval(str, word) {
  let result = [];
  str.split(" ").forEach( (el) => {
    if(el !== word){
      result.push(el);
    }
  });
  return result.join(" ");
}

module.exports = DOMNodeCollection;























//
