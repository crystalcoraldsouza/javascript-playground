# sum(1)(2)(3)(4)..(n)()

## Infinite currying with recursion.

The final empty call () signals the function to stop and return the result.

```js
let sum = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};
console.log(sum(1)(2)(3)());
```

```js
let sum = function (a) {
  return function (b) {
    if (b !== undefined) {
      return sum(a + b);
    }
    return a;
  };
};
console.log(sum(1)(2)(3)());
```

```js
let sum = (a) => (b) => (b ? sum(a + b) : a);
```
