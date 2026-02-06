# Undefined vs not defined in JS

Undefined is a special keyword assigned to anything declared.

```js
console.log(a);
console.log(b);
var a = 7; // add breakpoint here
var b;
```

Output:

> undefined <br/>
> undefined

Before any execution, `a` and `b` are both `undefined`.

> JavaScript is a `loosely typed` or `weakly typed` or `dynamically types` language. You can assign anything to the variable at any time.

> You can assign `undefined` to variables, but is `not a best practice `and can lead to inconsistencies.
