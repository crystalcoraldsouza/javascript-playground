# Crazy JS interview ft. closures

### Explain closures with an example - mention lexical scope.

```js
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
outer()();
```

Output:

> 10

---

### What if declaration is after the inner function?

```js
function outer() {
  function inner() {
    console.log(a);
  }
  var a = 10;
  return inner;
}
outer()();
```

Output:

> 10

---

### What if we use let instead?

```js
function outer() {
  function inner() {
    console.log(a);
  }
  let a = 10;
  return inner;
}
outer()();
```

Output:

> 10

---

### How does passing parameters to outer function work?

```js
function outer(b) {
  function inner() {
    console.log(a, b);
  }
  var a = 10;
  return inner;
}
outer("hello")();
```

Output:

> 10 "hello"

---

## What if you have a third wrapper function?

```js
function wrapper() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    var a = 10;
    return inner;
  }
  return outer;
}

wrapper()("hello")();
```

Output:

> 10 "hello" 20

---

### What if you have a global variable of same name? - mention scope chain

```js
function wrapper() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    var a = 10;
    return inner;
  }
  return outer;
}
let a = 1000;
wrapper()("hello")();
```

Output:

> 10 "hello" 20

---

### Advantages of closures

- Module Design Pattern
- Currying
- Higher Order Functions like once memoize
- Helps in data hiding and encapsulation
- Maintaining state in async world
- setTimeouts
- Iterators
- and many more

---

### What is data hiding and encapsulation?

Consider a variable, we want to keep some variable so other functions of other parts of code cannot access it.

```js
var counter = 0;
function incrementCounter() {
  counter++;
}
```

Here anywhere in the code can access the counter variable. Lets say we dont want counter to be accessed anywhere else

```js
function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
  };
}
var counter1 = counter();
counter1();
```

The variable is now hidden to other function outside the scope. Acts as a private variable.

---

### What will happen if you create a counter2?

```js
function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
  };
}
var counter1 = counter();
counter1();
var counter2 = counter();
```

Now counter 2 is a new instance of counter, and the increment function has a new count value.

---

### Is this the best way to create a counter? Is it scalable, can we decrement?

We could use contructor functions.

```js
function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
  };
  this.decrementCounter = function () {
    count--;
  };
}
var counter1 = new Counter();
counter1.incrementCounter();
```

The `new` keyword is needed with Capital C for naming convention for a constructor function.

---

### Disadvantages of closures

- Overconsumption of memory, and the closed over variables are not garbage collected.
- Can lead to memory leaks and freeze the browser.

---

### What is a Garbage Collector?

It is a program in the JavaScript engine to free up untilized memory. JS is a high level programming languagea and handles. However in C, C++ the memory allocationa and deallocation has to handled.

---

### What is the relation between closures and garbage collectors?

```js
function a() {
  var x = 0;
  return function b() {
    console.log(x);
  };
}
a();
```

Once a is executed, x would be cleant up, but since we have a closure formed by b.
However modern engines like v8 have smart garbage collection, they clean up variables that cannot be reached.

---

### What is smart garbage collection?

```js
function a() {
  var x = 0,
    z = 10;
  return function b() {
    console.log(x);
  };
}
a();
```

z is cleant up from memory since it is not used.
