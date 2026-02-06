# Closures in JS

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). Closure gives you access to another function's scope from an inner function.
In JavScript, closures are created every time a function is created, at function creation time.

---

Function inside a function

```js
function x() {
  var a = 7;
  function y() {
    console.log(a); // add breakpoint here
  }
  y();
}
x();
```

> Closure (x) at the breakpoint

---

Function returned in a function

```js
function x() {
  var a = 7;
  function y() {
    console.log(a); // add breakpoint here
  }
  return y;
}
var z = x();
z();
```

Output:

> 7

Lexical scope x is retained in closure (function and lexical scope) in z.

---

Reference of a is preserved

```js
function x() {
  var a = 7;
  function y() {
    console.log(a); // add breakpoint here
  }
  a = 100;
  return y;
}
var z = x();
z();
```

Output:

> 100

---

Multiple level closures, each scope preserved

```js
function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    a = 100;
    y();
  }
  x();
}
z();
```

Output:

> 900 100

## Uses of closures

- Module Design Pattern
- Currying
- Functions like once
- Memoize
- Maintaining state in async world
- setTimeouts
- Iterators
- and many more
