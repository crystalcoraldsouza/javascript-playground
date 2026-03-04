# Prototype and prototypal inheritance in JavaScript

## Prototype

A prototype is an object from which other objects inherit properties and methods.
In JavaScript:

- Every object has an internal hidden property called [[Prototype]]
- It points to another object
- That object is called its prototype

```js
let arr = ["Crystal", "Dsouza"];
let obj = {
  name: "Crystal",
  family: "Dsouza",
  getName: function () {
    console.log(this.name + " " + this.family);
  },
};
function fun() {}
```

Object attached to every array, object, function giving access to properties like push etc is a prototype.

## Prototype chaining

Prototype chaining is the mechanism by which JavaScript objects inherit features from one another through a chain of prototypes.

> `arr.__proto__` OR `Array.prototype`<br/>
> `obj.__proto__` OR `Object.prototype` OR `arr.__proto__.__proto__` OR `fun.__proto__.__proto__`<br/>
> `fun.__proto__`

## Prototypal Inheritance

Prototypal inheritance is a way for objects to inherit properties and methods from other objects via the prototype chain.

Never do this - demonstration only

```js
let obj1 = {
  name: "Demo",
  city: "UK",
  getName: function () {
    console.log(this.name + " from " + this.city);
  },
};
let obj2 = {
  name: "Demo2",
};
obj2.__proto__ = obj1;
console.log(obj2.name); // Demo2
console.log(obj2.city); // UK
console.log(obj2.getName); // Demo2 from UK
```

The `this` access the name in obj2, finds it in obj2 level but for city find in obj1.

```js
Function.prototype.test = function () {
  console.log("hello");
};
function fun() {}

fun.test(); // hello
```

## prototype vs `__proto__`

They are NOT the same thing.

### prototype

`prototype` exists on functions only. `prototype` is used when creating objects with new.

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello");
};

const user = new Person("Crystal");
```

When new Person() runs: `When new Person() runs:`

### `__proto__`

`__proto__` exists on all objects.

It is a reference to the object’s internal: [[Prototype]]

| Feature      | `prototype`               | `__proto__`                        |
| ------------ | ------------------------- | ---------------------------------- |
| Exists on    | Functions                 | Objects                            |
| Purpose      | Used to build inheritance | Used to access inherited prototype |
| Used during  | Object creation (`new`)   | Property lookup                    |
| Standard way | Yes                       | No (legacy)                        |

```js
Object.getPrototypeOf(obj);
Object.setPrototypeOf(obj, newProto);
```

## How Inheritance Works in JavaScript

### Delegation in JS

JavaScript does NOT copy methods during inheritance. Objects delegate property lookup to another object via the prototype chain.

```js
const animal = {
  eats: true,
  walk() {
    console.log("Animal walking");
  },
};

const dog = {
  bark() {
    console.log("Woof!");
  },
};

Object.setPrototypeOf(dog, animal);

dog.walk();
```

### Differences in traditional vs JS

| JavaScript                      | Java / C++                           |
| ------------------------------- | ------------------------------------ |
| Prototype-based                 | Class-based                          |
| Objects inherit from objects    | Classes inherit from classes         |
| Dynamic                         | Static (compile-time)                |
| Delegation-based lookup         | Structure defined at compile time    |
| Can change prototype at runtime | Cannot change inheritance at runtime |

In JS, you can change inheritance at runtime.

### class in JS

JS introduced class syntax:

```js
class Animal {
  walk() {}
}

class Dog extends Animal {
  bark() {}
}
```

But internally, it still uses prototypes. It is syntactic sugar

> `Dog.prototype.__proto__ = Animal.prototype`

JavaScript uses prototype-based delegation, while languages like Java use class-based inheritance.

JavaScript inheritance is more like: `Object → linked to another object`

Java inheritance is more like: `Class blueprint → instance created from it`
