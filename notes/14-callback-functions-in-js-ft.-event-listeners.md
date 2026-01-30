# Callback functions in JS ft. Event Listeners

## Callback Functions

A callback function is a function you pass into another function to be run later (or when something happens).

`JavaScript` is a `synchronous` `single-threaded language`. `Callbacks` enable `asynchonous` behaviour in JavaScript.

```js
setTimeout(function () {
  console.log("timer");
}, 5000);
function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});
```

Output:

> x <br/>
> y <br/>
> timer

## Blocking the main thread.

`Call stack` is also known as the `main thread`.

If any operation `blocks` the call stack, it is called as `blocking the main thread`.

## Event listeners

```html
<button id="testButton">Click me</button>
```

```js
function attachEventListeners() {
  let counter = 0;
  document
    .getElementById("testButton")
    .addEventListener("click", function xyz() {
      console.log("Button clicked!", ++counter);
    });
}
attachEventListeners();
```

`EventListener` of `button` has `handlers` which has the `scopes` - `global` and `closure`.

### Removing event listeners

Event listeners are memory heavy, they form closures, even when the call stack is empty.

### Best practices

- Remove event listeners when not being used.
