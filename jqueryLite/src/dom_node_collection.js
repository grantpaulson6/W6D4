class DOMNodeCollection {
  constructor(arr) {
    this.html_arr = arr;
  }

  html(str) {
    if (str) {
      this.html_arr.forEach( el => {
        el.innerHTML = str;
      })
    } else {
      return this.html_arr[0].innerHTML;
    }
  }

  empty() {
    this.html_arr.forEach( el => {
      el.innerHTML = "";
    });
  }

  append(arg) {
    if (arg instanceof DOMNodeCollection) {
      this.html_arr.forEach( receiver => {
        arg.html_arr.forEach( insertion => {
          receiver.appendChild(insertion);
        });
      });
    } else if (typeof arg === 'string') {
        this.html(arg);
    } else if (arg instanceof HTMLElement) {
      this.html_arr.forEach( receiver => {
        console.log(receiver);
        receiver.appendChild(arg.cloneNode(true));
      });
    }
  }
  children() {
    const children = [];
    this.html_arr.forEach( el => {
      children.push(new DOMNodeCollection(el.children));
    });
    return children;
  }
  parent() {
    const parent = [];
    this.html_arr.forEach( el => {
      parent.push(new DOMNodeCollection([el.parent]));
    });
    return parent;
  }



}

module.exports = DOMNodeCollection;