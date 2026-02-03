# Map, Filter and Reduce

## Map

Lets say we want to perform a transformation.

```js
const arr = [5, 1, 3, 2, 6];

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

const output = arr.map(double);

const output2 = arr.map(triple);

const output3 = arr.map((x) => x.toString(2));

console.log(output, output2, output3);
```

## Filter

Filter out values.

```js
const arr = [5, 1, 3, 2, 6];

function isOdd(x) {
  return x % 2;
}

function isEven(x) {
  return x % 2 === 0;
}

function greaterThan4(x) {
  return x > 4;
}

const output = arr.filter(isOdd);

console.log(output);
```

## Reduce

Reduce doesn't reduce! Take all elements and take out a single element out of it like largest or sum of array.

### Traditional way to sum

```js
const arr = [5, 1, 3, 2, 6];

function findSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(findSum(arr));
```

### Using reduce to sum

Accumulator is used to collect things, current is current value of loop, and second element is the inital value.

```js
const arr = [5, 1, 3, 2, 6];

const output = arr.reduce(
  (accumulator, current) => (accumulator += current),
  0,
);
```

### Traditional way to find max

```js
const arr = [5, 1, 3, 2, 6];

function findMax(arr) {
  let max = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

console.log(findMax(arr));
```

### Using reduce to find max

Accumulator is used to collect things, current is current value of loop, and second element is the inital value.
Assuming non zero and non negative.

```js
const arr = [5, 1, 3, 2, 6];

const output = arr.reduce(
  (accumulator, current) =>
    current > accumulator ? (accumulator = current) : accumulator,
  0,
);
```

## Examples

### Find the full names

```js
const users = [
  { firstName: "joe", lastName: "black", age: 90 },
  { firstName: "angela", lastName: "penny", age: 90 },
];

const output = users.map((x) => x.firstName + " " + x.lastName);

console.log(output);
```

### Find users with same age

```js
const users = [
  { firstName: "joe", lastName: "black", age: 90 },
  { firstName: "angela", lastName: "penny", age: 90 },
];

const output = users.reduce((acc, curr) => {
  if (acc[curr.age]) acc[curr.age]++;
  else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output);
```

### Find first names of all people less than 30

```js
const users = [
  { firstName: "joe", lastName: "black", age: 90 },
  { firstName: "angela", lastName: "penny", age: 90 },
];

const output = users.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(output);
```

### Find first names of all people less than 30 using reduce

```js
const users = [
  { firstName: "joe", lastName: "black", age: 90 },
  { firstName: "angela", lastName: "penny", age: 27 },
];

const output = users.reduce((acc, curr) => {
  if (curr.age < 30) acc.push(curr.firstName);
  return acc;
}, []);

console.log(output);
```
