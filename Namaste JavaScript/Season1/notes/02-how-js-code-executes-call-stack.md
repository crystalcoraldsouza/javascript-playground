# What happens when you run JavaScript code?

When JavaScript runs, it creates an **Execution Context**.

## Example

```js
var n = 2;

function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square4 = square(4);
```

## Global Execution Context (GEC)

When the code starts, the Global Execution Context is created in two phases:

### Phase 1: Memory Creation Phase (Hoisting)

JavaScript parses the code and allocates memory for variables and functions.

- Variables are set to `undefined`

- Functions are stored in memory with their full function body

So before execution, memory looks like:

- `n` → `undefined`

- `square` → `function square(num) { ... } `(entire function stored)

- `square2` → `undefined`

- `square4` → `undefined`

> Note: undefined is a special value in JavaScript that acts as a placeholder until a variable gets an actual value.

Now JavaScript runs the code line by line.

1. var n = 2;

- n updates from undefined → 2

2. The function declaration (square) doesn’t “run” here (it was already stored in memory during Phase 1).

3. `var square2 = square(n);`

- This is a function invocation (square(...)), so a new Execution Context is created for square.

## Function Execution Context (FEC) for `square(n)`

Just like the global context, the function context also has two phases.

### Phase 1: Memory Creation (inside `square`)

Memory is allocated for:

- `num` → `undefined`

- `ans` → `undefined`

### Phase 2: Code Execution (inside `square`)

- `num` gets the passed value: `num = 2`

- Here: `n` is the argument, `num` is the parameter

- ans = num \* num → ans = 4`

- `return ans` returns `4` back to where the function was called

Back in the Global Execution Context:

- `square2` becomes `4`

After `return`, the function’s execution context is removed from the call stack.

## Calling the function again

- New Function Execution Context is created

- `num = 4`

- `ans = 16`

- returns `16`

- `square4 = 16`

- function context is removed again

> **"Call Stack maintains the order of execution of execution contexts"**

| Initial Call Stack | Square2 Stack | After Return |
| :----------------: | :-----------: | :----------: |
|       &nbsp;       |    &nbsp;     |    &nbsp;    |
|       &nbsp;       |    &nbsp;     |    &nbsp;    |
|       &nbsp;       |      FEC      |    &nbsp;    |
|        GEC         |      GEC      |     GEC      |

Call Stack is also known as `Execution Context Stack`, `Program Stack`, `Control Stack`, `Runtime Stack`, `Machine Stack`
