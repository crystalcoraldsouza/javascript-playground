# Shortest JS program, window and this keyword

### Shortest JS program

An empty js file!

```js
index.js;
```

A `Global Execution Context`, `Global Object`, `this` is created.

---

### Window

It is a `global object` of a browser.

### This

At a global level `this` points to window

`JavaScript` can run on servers, browsers, devices. There has to be a `JavaScript Engine` like `V8`, and this engine always creates this object.

```js
this === window;
```

Output:

> true

---

> "Anything not in a function is in the global space."

```js
var a = 10;
this.a === window.a;
this.a === a;
window.a === a;
this === window;
```

Output:

> true <br/>
> true <br/>
> true <br/>
> true <br/>
