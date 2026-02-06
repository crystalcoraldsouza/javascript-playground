# Higher Order Functions ft. Functional Programming

## Higher Order Functions

A function that takes another function as an argument or returns a function from it.

```js
function x() {
  console.log("Hello");
}

function y(x) {
  x();
}
```

## Incorrect method of solving the problem to calcuclate area, circumference and diameter

```js
const radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
console.log(calculateArea(radius));

const calculateCircumference = function (radius) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

console.log(calculateCircumference(radius));

const calculateDiameter = function (radius) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};

console.log(calculateDiameter(radius));
```

> ## DRY Principle - Dont Repeat Yourself

## HOF solving the problem to calcuclate area, circumference and diameter

Reusable, modular

```js
const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(radius.map(area));

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));
```

## Using polyfills

```js
Array.prototype.calculate = function (logic) {
  const output = [];
  for (i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};
console.log(radius.calculate(area));
```
