const DOMNodeCollection = require('./dom_node_collection.js');


window.$1 = function(arg) {
  // debugger;
  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  } else if ( typeof arg === 'string') {
    return new DOMNodeCollection(selector(arg));
  }

  function selector(arg) {
    return Array.from(document.querySelectorAll(arg));
  }


};