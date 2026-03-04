# Polyfill for bind method

## Polyfill

A polyfill is a fallback implementation that provides modern JavaScript features in environments (usually older browsers) where they don’t exist.

Example: implementing `Function.prototype.bind()` if a browser doesn’t support it.

### Basic bind method

bind() creates a new function with:

- a fixed this context
- optionally preset arguments (partial application)

Example:

```js
let name = {
  firstName: "John",
  lastName: "Doe",
};
let printName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + state,
  );
};
let printMyName = printName.bind(name, "New York");
printMyName("NY");
```

Output:

> John Doe New York NY

`"New York"` is pre-filled; `"NY"` is passed later.

### Recreating bind method

Since every function inherits from Function.prototype, we add our custom bind there.

- `this` → the function being bound
- First argument → object to bind as this
- Remaining arguments → preset parameters
- Use `.apply()` to invoke function with combined arguments

Example:

```js
Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name, "Los Angeles");
printMyName2("CA");
```

Output:

> John Doe Los Angeles CA

Additional check can be done like for args validity, if printName is not a function, then throw an error, etc.
