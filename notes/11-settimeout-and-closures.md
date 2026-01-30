# setTimeout and closures

Time, tide and JavaScript waits for none!

```js
function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log("function x");
}
x();
```

Output:

> function x <br/>
> 1

The function forms a closure and has a reference of `i`. Timer is attached to the callback function.

---

Print 1 to 5 every second - incorrect version with var

```js
function x() {
  for (i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("function x");
}
x();
```

Output:

> function x <br/>
> 6 <br/>
> 6 <br/>
> 6 <br/>
> 6 <br/>
> 6

The value of i is 6 before the setTimeout is executes.

---

Print 1 to 5 every second - correct version with let

```js
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("function x");
}
x();
```

Output:

> function x <br/>
> 1 <br/>
> 2 <br/>
> 3 <br/>
> 4 <br/>
> 5

Using `let` fixes this, `let` has a `block scope`, so everytime the loop runs, a `new copy` of `i` is in the call back function.

---

Print 1 to 5 every second - correct version with var

```js
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(j) {
      setTimeout(function () {
        console.log(j);
      }, j * 1000);
    }
    close(i);
  }
  console.log("function x");
}
x();
```

Output:

> function x <br/>
> 1 <br/>
> 2 <br/>
> 3 <br/>
> 4 <br/>
> 5

Essentially we created a new copy of `j`
