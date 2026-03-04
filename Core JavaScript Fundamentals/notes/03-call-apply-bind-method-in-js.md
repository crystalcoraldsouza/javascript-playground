# Call, apply and bind method in JavaScript

## Call Method

Call method is used to call a function with a given this value and arguments provided individually.

```js
let name = {
  firstName: "John",
  lastName: "Doe",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
name.printFullName();

let name2 = {
  firstName: "Jane",
  lastName: "Smith",
};
name.printFullName.call(name2);
```

Output:

> John Doe <br />
> Jane Smith

`function borrowing`: using printFullName method of name object for name2 object

### Convention is to write the function outside the method

```js
let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + ", " + state,
  );
};

let name3 = {
  firstName: "Alice",
  lastName: "Johnson",
};

printFullName.call(name3, "New York", "NY");
```

Output:

> Alice Johnson from New York, NY

## Apply Method

Apply method is similar to call but takes arguments as an array

```js
printFullName.apply(name3, ["Los Angeles", "CA"]);
```

Output:

> Alice Johnson from Los Angeles, CA

## Bind Method

Bind method returns a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

```js
let printAliceName = printFullName.bind(name3);

printAliceName("Chicago", "IL");
```

Output:

> Alice Johnson from Chicago, IL
