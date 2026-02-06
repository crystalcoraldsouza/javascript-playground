# Async Await

## Async

Async is a keyword used before a function to make it async.

Async function always returns a promise. If you return a string, booolean, int etc it will wrap it around a promise.

```js
async function getData() {
  return "Hellow";
}

const dataPromise = getData();
dataPromise.then((res) => console.log(res));
// console.log(data);
```

Does not wrap a Promise with a Promise.

```js
async function getData() {
  return new Promise((resolve, reject) => {
    resolve("Yay");
  });
}

const dataPromise = getData();
dataPromise.then((res) => console.log(res));
// console.log(data);
```

## Await

Async and await are used to handle promises.
Await is a keyword that can only be used inside a async function.

```js
const p = new Promise((resolve, reject) => {
  resolve("Yay");
});
function getData() {
  p.then((res) => console.log(res));
}
getData();
```

```js
const p = new Promise((resolve, reject) => {
  resolve("Yay");
});
async function handlePromise() {
  const data = await p;
  console.log(data);
}
handlePromise();
```

## Difference between async await and promise syntax

In older syntax, the next line executes. Await causes the JS Engine to wait until the promise is resolved.

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Yay"), 10000);
});

function getData() {
  p.then((res) => console.log(res));
  console.log("Hello World");
}
getData();

async function handlePromise() {
  const data = await p;
  console.log(data);
  console.log("Namaste World");
  const data2 = await p;
  console.log(data2);
  console.log("Namaste World2");
}
handlePromise();
```

The same promise resolved twice print all together -

Case showing order execution

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Yay1"), 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Yay2"), 5000);
});

function getData() {
  p.then((res) => console.log(res));
  console.log("Hello World");
}
getData();

async function handlePromise() {
  const data = await p1;
  console.log(data);
  console.log("Namaste World");
  const data2 = await p2;
  console.log(data2);
  console.log("Namaste World2");
}
handlePromise();
```

Case showing order execution

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Yay1"), 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Yay2"), 10000);
});

async function handlePromise() {
  console.log("Namaste World");
  const data = await p1;
  console.log(data);
  console.log("Namaste World1");
  const data2 = await p2;
  console.log(data2);
  console.log("Namaste World2");
}
handlePromise();
```

The program is executed line by line until await is encountered. It moves the handlePromise out of the Call Stack once ready aka Promise is resolved then reenters the CallStack.

## Async Await for fetch with try catch error handling

```js
const GITHUB_API = "https://api.github.com/users/crystalcoraldsouza";

async function handlePromise() {
  try {
    const user = await fetch(GITHUB_API);
    const jsonData = await user.json();
    console.log(jsonData);
  } catch (err) {
    console.log(err);
  }
}

handlePromise();
```

## Async Await for fetch with promise error handling

```js
const GITHUB_API = "https://api.github.com/users/crystalcoraldsouza";

async function handlePromise() {
  const user = await fetch(GITHUB_API);
  const jsonData = await user.json();
  console.log(jsonData);
}

handlePromise().catch((err) => console.log(err));
```

Async Await is using the normal promise handling internal and avoids promise chaining.
