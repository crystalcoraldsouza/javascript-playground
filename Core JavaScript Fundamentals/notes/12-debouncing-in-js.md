# Debouncing in JavaScript

Debouncing is a technique that ensures a function runs only after a certain delay has passed since the last time it was triggered.

Mainly to avoid unnecessary repeated operations:

- API calls while typing search text
- Window resize or scroll events
- Button double-click prevention
- Auto-save features

This improves:

- Performance
- Network efficiency
- User experience

### User typing in search bar:

Without debouncing:

> H → API call <br/>
> He → API call <br/>
> Hel → API call <br/>
> Hell → API call <br/>
> Hello → API call

```js
let counter = 0;
const getData = () => {
  const input = document.getElementById("input").value;
  console.log("Fetching Data", input, "..", counter++);
};

const debounceMethod = function (fn, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const betterFunction = debounceMethod(getData, 1000);
```

### The Common Debounce Trap (Losing this)

In debounce implementations, this can be lost because the function executes later via setTimeout. Using apply() ensures the original context and arguments are preserved.

Hidden issue:

```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(function () {
      fn(...args);
    }, delay);
  };
}
```

Example:

```js
const obj = {
  name: "Crystal",

  printName() {
    console.log(this.name);
  },
};

obj.printName(); // Crystal
obj.printName = debounce(obj.printName, 1000);
obj.printName(); // undefined
```

Execution flow:

```js
obj.printName()
     ↓
debounce wrapper runs
     ↓
setTimeout schedules function
     ↓
setTimeout executes later
     ↓
fn() runs with wrong this
```

Correct Fix:

```js
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    const context = this;

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}
```

Notice we used: `setTimeout(() => {})`

> Arrow functions do not create their own this.
> They inherit this from the surrounding scope.
> So context remains correct.
