# The Scope Chain, Scope and Lexical Environment

Scope in JavaScript is directly related to the Lexical Environment.

## Lexical Environment

Lexical Environment is the local memory along with the Lexical Environment of its parent.

Lexical refers to definition of things, in tour case definition of space in JS.

```js
function a() {
  console.log(b);
  c();
  function c() {
    console.log(b);
  }
}
var b = 10;
a();
```

Output:

> 10 <br/>
> 10

```js
function a() {
  var d = 5;
  console.log(b);
  c();
  function c() {
    console.log(b);
  }
}
var b = 10;
a();
console.log(d);
```

Output:

> Uncaught Reference Error: d is not defined

`c()` is lexically inside `a()` and `a()` is lexically inside `Global Execution Context` and `Global Execution Context` points to `null`.

## Scope

Scope of variable `d` is the `Global Execution Context`.

## Scope Chain

Example for scope of `d`:

> `Global Execution Context` → `null`
> Not Found, hence error, scope chain exhausted

Example of scope of `b` from console in `c()`:

> `c()` → `a()` → `Global Execution Context`
> Found in GEC, hence returned
