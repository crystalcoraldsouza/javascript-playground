# Promise APIs and Interview Questions

## Promise APIs

### Promise.all()

It takes an iterable of promises in a scenario like parallel API calls or multiple promises.

Acts as fail fast technique.

#### All Success/Resolved/Fulfilled scenario

Promise.all([p1, p2, p3])

Time taken: p1 - 3s, p2 - 1s, p3 - 2s

Result of Promise.all would be in 3s:

`[val1, val2, val3]`

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 2 success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3 success"), 2000);
});

Promise.all([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

Output:

> ['Promise 1 success', 'Promise 2 success', 'Promise 3 success']

Returned in 3s

#### One of the Promise has Failure/Rejected scenario

Promise.all([p1, p2, p3])

Time taken: p1 - 3s, p2 - 1s (rejected), p3 - 2s

Result of Promise.all would be in 1s: `Error`

Even if p1 and p3 successfully resolved, it `does not wait` to return the error.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 2 failure"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3 success"), 2000);
});

Promise.all([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

Output:

> Promise 2 failure

Returned in 1s

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 2 success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 3 failure"), 2000);
});

Promise.all([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

Output:

> Promise 3 failure

Returned in 2s

<hr />

### Promise.allSettled()

#### All Success/Resolved/Fulfilled scenario

Promise.allSettled([p1, p2, p3])

Time taken: p1 - 3s, p2 - 1s, p3 - 2s

Result of Promise.allSettled would be in 3s:

`[val1, val2, val3]`

#### One of the Promise has Failure/Rejected scenario

Promise.allSettled([p1, p2, p3])

Time taken: p1 - 3s, p2 - 1s (rejected), p3 - 2s

Result of Promise.allSettled would be in 3s:

`[val1, err2, val3]`

Waits for all Promises to be `Settled` (Resolved or Rejected) for 3s.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 2 success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 3 failure"), 2000);
});

Promise.allSettled([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

Output:

```js
[
  {
    status: "fulfilled",
    value: "Promise 1 success",
  },
  {
    status: "fulfilled",
    value: "Promise 2 success",
  },
  {
    status: "rejected",
    reason: "Promise 3 failure",
  },
];
```

<hr />

### Promise.race()

Whichever promise settles earliest.

#### All Success/Resolved/Fulfilled scenario

Promise.race([p1, p2, p3])

Time taken: p1 - 3s, p2 - 1s, p3 - 2s

Result of Promise.race would be in 1s: `val2`

Returns the result of the `first` promise settled, it `does not wait` for other promises.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 2 success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3 success"), 2000);
});

Promise.race([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

Output:

> Promise 2 success

Returns first settled promise

#### One of the Promise has Failure/Rejected scenario

Promise.race([p1, p2, p3])

Time taken: p1 - 3s, p2 - 1s (rejected), p3 - 2s

Result of Promise.race would be in 1s: `Error`

Returns the result of the `first` promise settled, it `does not wait` for other promises.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 2 failure"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3 success"), 2000);
});

Promise.race([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

Output:

> Promise 2 failure

Returns first settled promise in 1s

<hr />

### Promise.any()

The first `resolved` promised is returned. Success seeking race.

#### All Success/Resolved/Fulfilled scenario

Promise.any([p1, p2, p3])

Time taken: p1 - 3s, p2 - 1s, p3 - 2s

Result of Promise.any would be in 1s: `val2`

Returns the result of the `first` promise resolved, it `does not wait` for other promises or care about failures.

#### One of the Promise has Failure/Rejected scenario

Promise.any([p1, p2, p3])

Time taken: p1 - 3s, p2 - 1s (rejected), p3 - 2s

Result of Promise.any would be in 2s: `val3`

Returns the result of the `first` promise resolved, it `does not wait` for other promises or care about failures.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 2 failure"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3 success"), 2000);
});

Promise.any([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

Output:

> Promise 3 success

Returns in 2s

#### All Failure/Rejected scenario

Promise.any([p1, p2, p3])

Time taken: p1 - 3s (rejected), p2 - 1s (rejected), p3 - 2s (rejected)

Result of Promise.any would be in 3s: `[err1, err2, err3]`

Returns an `Aggregated Error`.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 1 failure"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 2 failure"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 3 failure"), 2000);
});

Promise.any([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
    console.log(err.errors);
  });
```

Output:

> AggregateError: All promises were rejected

> ['Promise 1 failure', 'Promise 2 failure', 'Promise 3 failure']

Returned in 3s
