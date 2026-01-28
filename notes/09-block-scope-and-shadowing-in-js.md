# Block Scope and Shadowing in JS

## Block

A `Block` is anyhing inside curly braces `{ }`. A Block is also known as a `Compound Statement`.

A Block is used to combine multiple JavaScript statements into a group. This is done when you want to execute multiple statements in a place where JavaScript expects only one statement.

```js
{
  // This is a block
  var a = 10;
  console.log(a);
}

if (true) true; // single statement expected

if (true) {
  // grouping multiple statements
  var a = 10;
  console.log(a);
}
```

## Block Scope

All the variables and functions that can be accessed inside that block.

```js
var a = 100;
let b = 200;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
```

Output:

> 10 <br/>
> 20 <br/>
> 30 <br/>
> 10 <br/>
> 200 <br/>
> Uncaught ReferenceError: c is not defined

Block scopes are also lexical scopes and follows the scope chain pattern.

## Shadowing

Shadowing is when a variable declared in an inner scope has the same name as a variable in an outer scope, so the inner one “hides” (shadows) the outer one inside that scope.

Works similarly in `Blocks` and `Functions`.

### In var

When the original `Global Scope` is overwritten from block scope `var a` as it is in the same memory location.

### In let and const

However `let b` is present in two scopes, `Block Scope` and `Script`.

### Illegal shadowing

To shadow something, it must not cross the boundary of its scope.

```js
let a = 20;
{
  var a = 20;
}
```

Output:

> Uncaught SyntaxError: Identifier 'a' has already been declared.

The scope of var is beyond the block here. So basically in teh same scope we are trying to redeclare.

---

```js
let a = 20;
function b() {
  var a = 20;
}
```

Output:

>

The scope of var is the function.

> Scope of arrow functions and normal functions are the same.
