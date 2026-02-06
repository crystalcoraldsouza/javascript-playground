# Trust Issues with setTimeout()

setTimeout does not guarantee when the callback would be executed.

```js
console.log("Start");
setTimeout(function cb() {
  console.log("Callback");
}, 5000);
console.log("End");
```

The `callback` function is `registered`, and timer starts. After `5000ms` it would be in the `Callback Queue`.
If we have 1mil loc taking `10 secs`, the Callback Queue will not execute as `GEC` is still in the `Call Stack`.

> Don't block your `main thread` or `Call Stack`.

## Example of code delay causing delay in setTimeout

```js
console.log("Start");
setTimeout(function cb() {
  console.log("Callback");
}, 5000);
console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}
console.log("While complete");
```

## Example of setTimeout 0!

```js
console.log("Start");
setTimeout(function cb() {
  console.log("Callback");
}, 0);
console.log("End");
```
