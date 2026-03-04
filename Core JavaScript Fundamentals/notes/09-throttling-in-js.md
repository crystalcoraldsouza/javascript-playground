# Throttling in JavaScript

Throttling limits how frequently a function can run by ensuring it executes at most once within a specified time interval.

So with delay = 1000:

- Function runs at most once per second
- Extra calls within that second are ignored

flag = true → function allowed
flag = false → function blocked

```js
const throttleMethod = function (fn, delay) {
  let flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const betterFunction = throttleMethod(getData, 1000);
```
