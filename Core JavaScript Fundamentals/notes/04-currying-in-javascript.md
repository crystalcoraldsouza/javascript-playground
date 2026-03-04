# Currying in JavaScript

Currying is a technique where a function with multiple arguments is transformed into a sequence of functions, each taking one argument.

Instead of: `f(a, b, c)`

we write: `f(a)(b)(c)`

Currying helps with:

- Function reuse
- Partial application
- Functional programming patterns
- Cleaner code composition

## Partial application using bind

```js
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5); // 10

let multiplyByTwo = multiply.bind(this, 2, 3);
multiplyByTwo(5); // 6, argument 5 is ignored.

let multiplyByTwo = multiply.bind(this);
multiplyByTwo(2, 3); // 6
```

`multiply.bind(this, 2)` creates a new function equivalent to:

```js
function (y) {
  multiply(2, y);
}
```

## True currying using closures

The inner function remembers the outer variable due to closure.

```js
let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};
let multiplyByTwo = multiply(2);
multiplyByTwo(5); // 10
```

## Infinite currying in JS

Infinite currying allows a function to be called multiple times in a chain until a stopping condition occurs. It combines closures, recursion, and function chaining.

```js
function sum(a) {
  return function (b) {
    if (b !== undefined) {
      return sum(a + b);
    }
    return a;
  };
}
console.log(sum(1)(2)(3)(4)());
```
