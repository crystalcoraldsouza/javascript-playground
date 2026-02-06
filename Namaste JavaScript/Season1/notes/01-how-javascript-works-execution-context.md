# How JavaScript Works & Execution Context

> **“Everything in JavaScript happens inside an Execution Context.”**

## What is an Execution Context?

Think of an **Execution Context** as a container created by JavaScript to run code.  
It has **two main components**:

### 1) Memory Component _(Variable Environment)_

Stores identifiers (variables + function declarations) as **key → value** pairs.

### 2) Code Component _(Thread of Execution)_

Runs the code **line by line**, in the order it appears.

---

## Execution Context Breakdown

| Memory Component _(Variable Environment)_      | Code Component _(Thread of Execution)_ |
| ---------------------------------------------- | -------------------------------------- |
| `key: value` storage for variables & functions | Executes code step-by-step             |
| Example: `a: 10`                               | Example: runs statements in sequence   |
| Example: `fn: { ... }`                         | Calls functions when encountered       |

---

## Key takeaway

> **JavaScript is a synchronous, single-threaded language.**

It executes **one command at a time**, in a **specific order**.
