# JS Engine exposed Google's V8 Architecture

## JavaScript Runtime Environment

JavaScript can run everywhere because of JavaScript Runtime Environment.

Examples of runtimes:

- Browser runtime
- Node.js runtime

A runtime provides:

- A JS engine
- Web / Platform APIs
- Event Loop infrastructure

## JavaScript Engine (core execution)

A JavaScript engine executes JS code. It mainly consists of:

- Memory Heap
- Call Stack

> The engine itself does not handle async behaviour - that's the runtime's job.

## Runtime Components (Browser/Node)

- Web / Platform APIs
  - setTimeout, setInterval
  - fetch
  - console
  - localStorage (browser-only)
- Event Loop
- Callback (Task) Queue
- Microtask Queue
  - Promises (.then, .catch)
  - queueMicrotask

> Microtasks have higher priority than the callback queue.

## ECMAScript

- ECMAScript is the language specification for JavaScript.
- It is standardized by ECMA International (TC39).
- JavaScript engines must follow this spec.

## ECMAScript Engines (examples)

- V8 – Chrome, Node.js
- SpiderMonkey – Firefox
- Chakra – Legacy Microsoft Edge
- JavaScriptCore – Safari

## Custom JavaScript Engines

You can create your own JS engine, as long as it:

- Follows the ECMAScript specification
- Most engines are written in C++, Rust, or similar low-level languages.

## Programming Paradigms in JavaScript

JavaScript s

- Procedural
  - Functions, variables, control flow
- Object-Oriented
  - Objects, prototypes, class, inheritance
- Functional - First-class functions - Higher-order functions - Immutability (by convention)
  > JavaScript is best described as a multi-paradigm language.

## JS Engine is not a machine.

- A JavaScript engine is a program, not hardware.
  - Example: V8 engine is written mainly in C++.
- Its job is to convert high-level JavaScript code into machine code that the CPU can execute.

## High-level execution pipeline

```js
JS Source Code
   ↓
Parsing
   ↓
AST (Abstract Syntax Tree)
   ↓
Compilation (JIT / AOT)
   ↓
Execution

```

## Parsing Phase

### Tokenization

Source code is broken into tokens

Example:

```js
let a = 7;
```

Tokens → let, a, =, 7

### Syntax Parsing

- Tokens are converted into an AST (Abstract Syntax Tree)
- AST represents the structure and meaning of the code

## Compilation Strategies

### JIT (Just-In-Time) Compilation

- Uses both an interpreter and a compiler
- Flow:

```js
AST → Interpreter → Bytecode → Execution

                   ↓
            Optimizing Compiler
                   ↓
          Optimized Machine Code

```

- Code is:
  - Executed quickly first (via interpreter)
  - Optimized during runtime
- Optimization may happen in multiple phases

## AOT (Ahead-Of-Time) Compilation

- Code is compiled before execution
- Used in some environments (less common for JS in browsers)

## Interpreter vs Compiler

### Interpreter

- Executes code line by line
- Fast startup
- Less optimized

### Compiler

- Compiles code first, then executes
- Better performance
- Takes more time initially
  > Modern JS engines use both

## Why JavaScript uses both

- JavaScript was originally an interpreted language
- Modern engines:
  - Start with interpretation (fast)
  - Switch to compilation when code runs frequently
- Everything depends on the JS engine implementation

## V8 Engine (example)

- Ignition → Interpreter
- TurboFan → Optimizing compiler
- Garbage Collector:
  - Orinoco (parallel & incremental GC)
  - Oilpan (for DOM-related memory in Chromium)

## V8 flow

```js
JSource Code
   ↓
Paer
   ↓
AST
   ↓
Ignition Interpreter
   ↓

Bytecode → Executed
   ↓
TurboFan Compiler
   ↓
Optimized Machine Code
```

## Memory Management in JS Engine

- Memory Heap
  - Stores objects, variables, functions
- Call Stack
  - Tracks function execution
- Garbage Collector
  - Frees unused memory
  - Common strategy: Mark-and-Sweep
    - Marks reachable objects
    - Sweeps unreachable ones

## Compiler Optimizations (examples)

- Inlining
- Inline caching
- Copy elison
- Dead code elimination
- Runtime re-optimization & de-optimization

> astexplorer.net
> Visualize ASTs for different JS parsers, useful for understanding parsing.

```js
const test = "This is a new world";
```

```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 34,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "name": "test"
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 34,
            "value": "This is a new world",
            "raw": "\"This is a new world\""
          }
        }
      ],
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
