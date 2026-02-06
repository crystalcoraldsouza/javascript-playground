# First class functions ft. Anonymous functions

## Function Statement aka Function Declaration

Function `a` is created in memory with the the function itself.

```js
a();
function a() {
  console.log("called");
}
```

## Function Expression

When a `function` is created as a `value` and assigned to a variable, difference between them is `hoisting`, `b` would be `undefined` as b is in memory but doesnt have the function assigned to it until executed.

```js
b();
var b = function a() {
  console.log("called");
};
```

## Anonymous Function

Function without a name (`no identifier` after function), without a name is an invalid syntax. Anonymous functions are used where they are `used as values`.

```js
function () { // Invalid syntax
  console.log;
};
var b = function () {
  console.log;
};
```

## Named Function Expression

A named function assigned to a variable. `a` is `not accessible` outside the `function` itself. Can be used for `recursive` logic.

```js
b();
var b = function a() {
  console.log("called", a); // accessible here
};
a(); // throws error

const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // can call itself using `fact`
};
```

## Parameters vs Arguments

Parameters are `local variables` or `identifiers` or `labels` or `variables` (placeholders) in the function definition. Arguments are actual values passed to function.

```js
b(argument);
var b = function a(parameter) {
  console.log("called", parameter);
};
```

## First Class Functions

Functions are treated like any other value in JavaScript.They have the ability to be used as `values`, `assigned to variables`, `passed as arguments`, `returned from a function`, and `stored in objects/arrays`.

Functions are `First Class Citizens.`

```js
var b = function (parameter) {
  console.log(parameter);
};
b(function () {});

var b = function (parameter) {
  return function () {};
};
console.log(b());
```
