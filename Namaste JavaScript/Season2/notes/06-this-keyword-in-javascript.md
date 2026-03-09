# `this` keyword in JavaScript

`this` is a keyword that refers to the object executing the current function.
Its value is determined by how the function is called at runtime, not where it is defined.
Arrow functions inherit `this` from their lexical (surrounding) scope

## `this` in global space

In global scope, depemds on environment. In the global scope, this refers to the global object.

Browser → window

Node.js → global

ES Modules → undefined

```js
console.log(this); // window object of browser or global for node
```

## `this` inside a function - (this substitution)

In non-strict mode, if this is undefined or null, JavaScript replaces it with the global object. This behaviour is called this substitution.

```js
function x() {
  console.log(this); // window
}
x();
```

## `this` in strict mode

In strict mode, this is not substituted. If a function is called normally, this will be undefined.

```js
"use strict";
function x() {
  console.log(this); // undefined
}
x();
```

## `this` value depends on how this is called (window)

The value of this is determined by the call site.

```js
"use strict";
function x() {
  console.log(this); // undefined
}
x(); // no reference
```

```js
"use strict";
function x() {
  console.log(this); // window
}
window.x(); // with referencer
```

## `this` inside a object's method

When a function is called as a method of an object, this refers to that object.

```js
const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};
obj.x(); // this is the obj
```

## `call`, `apply`, `bind` methods (sharing methods)

These methods manually control this.

```js
const obj = { name: "John" };

function greet() {
  console.log(this.name);
}

greet.call(obj);
greet.apply(obj);

const newFunc = greet.bind(obj);
newFunc();
```

## `this` inside arrow function

Arrow functions do not have their own this. They inherit this from the lexical (surrounding) scope. Because the arrow function takes this from the outer/global scope.

```js
const obj = {
  a: 10,
  x: () => {
    console.log(this);
  },
};
obj.x(); // window
```

## `this` inside nested arrow function

Arrow functions inherit this from their enclosing function. Because y inherits this from x.

```js
const obj = {
  a: 10,
  x: function () {
    // enclosing lexical context
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj.x(); // this is the obj
```

## `this` inside DOM

Inside DOM event handlers, this refers to the HTML element that triggered the event.
With arrow functions, this will not refer to the element.

```js
<button onclick="alert(this)">Click me</button> // [object HTMLButtonElement]
```

## `this` inside constructor

Inside constructor functions, this refers to the newly created object.

```js
function Person(name) {
  this.name = name;
}

const p1 = new Person("John");

console.log(p1.name);
```

## `this` inside classes

Classes work the same way as constructors. this refers to the instance of the class.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(this.name);
  }
}

const p1 = new Person("John");
p1.greet();
```

## `this` lost in callbacks

```js
const obj = {
  name: "Alice",
  greet: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

obj.greet(); // undefined
```

Because this becomes window/global.

Fix using arrow function:

```js
setTimeout(() => {
  console.log(this.name);
}, 1000);
```
