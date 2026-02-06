# Let and const in JS, Temporal Dead Zone

## Let and Const have separate memory

`let` and `const` declarations are hoisted, but differently from `var`. They are hoisted in the `Temporal Dead Zone`.

```js
let a = 10;
console.log(a);
var b = 100;
```

Output:

> 10

In Source:

> Script <br/>
> a: \<value unavailable>

`a` is assigned a separate memory but different than `Global` which cannot be accessed until you put some memory in it.

---

For var:

```js
window.b;
```

Output:

> 100

---

For let:

```js
window.a;
```

Output:

> undefined

## Temporal Dead Zone

The time between `let` was hoisted and a value was assigned.

When access to variable `a` is attempted in the `Temporal Dead Zone`, it gives a `ReferenceError: Cannot access 'a' before inititalization`.

When access to variable `x` is attempted which is not present in code, it gives a `ReferenceError: x is not defined`.

## Restriction of Let and Const

Cannot redeclared a declared variable in same scope when `let` or `const` is used.

```js
let a = 10;
let a = 100; OR var a = 100;
```

Output:

> Uncaught `SyntaxError`: Identifier 'a' has already been declared

Does not execute a single line of code execution. Syntax of code is incorrect as redeclaration of declared let is seen.

---

### Let can be reassigned a value, const has to be declared then and there.

```js
let a;
const b;
a = 10;
b = 1000;
```

Output:

> Uncaught `SyntaxError`: Missing initializer in const declaration

Missing syntax since `b` is expected to be assigned a value.

---

### Const cannot be reassigned a value.

```js
const b = 10;
b = 1000;
```

Output:

> Uncaught `TypeError`: Assignment to constant variable

## Best practices

- Use const when possible, else let.
- Avoid var.
- Put declarations and initializations to top of your scope to shrink the Temporal Dead Zone.
