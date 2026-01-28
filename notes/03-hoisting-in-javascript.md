# Hoisting in JavaScript

Accessing variables and functions even before initialization due to memory assigned in phase 1 of `Execution Context`.

> Tip: Check the source code in first like of file to see Global Scope.

## Examples

### After initialization

```js
var x = 7;
function getName() {
  console.log("Namaste JavaScript");
}
getName();
console.log(x);
```

Output:

> Namaste JavaScript <br />
> 7

---

### Before initialization

```js
getName();
console.log(x);
var x = 7;
function getName() {
  console.log("Namaste JavaScript");
}
```

Output:

> Namaste JavaScript <br />
> undefined

---

### Without initialization

```js
getName();
console.log(x);

function getName() {
  console.log("Namaste JavaScript");
}
```

Output:

> Namaste JavaScript <br />
> Uncaught ReferenceError: x is not defined

> `undefined !== not defined` x is not defined in memory

---

### Function before initialization

```js
console.log(getName);

function getName() {
  console.log("Namaste JavaScript");
}
```

Output:

> f getName() { <br />
> console.log("Namaste JavaScript");<br />
> }

---

### Function before initialization with arrow

```js
getName();

var getName = () => {
  console.log("Namaste JavaScript");
};
OR;
var getName = function () {
  console.log("Namaste JavaScript");
};
```

Output:

> Uncaught TypeError: getName is not a function

Since getName is now a variable and has memory allocated with placeholder undefined assigned to it.

---

### Call Stack

```js
var x = 7; // add breakpoint here
function getName() {
  var y = 25;
  console.log("Namaste JavaScript"); // add breakpoint here
}
getName(); // add breakpoint here
console.log(x); // add breakpoint here
```

> Local <br/>
> y: 25 <br/>
> Global <br/>
> getName: f getName() {...} <br/>
> x: 7

On the third breakpoint, new Execution Context getName is in Call Stack with Local Execution Context, and then on fourth breakpoint the getName Execution Context is deleted.
