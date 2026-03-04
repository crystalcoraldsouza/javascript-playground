let name = {
  firstName: "John",
  lastName: "Doe",
};

let printName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + state,
  );
};

let printMyName = printName.bind(name, "New York");

printMyName("NY"); // Output: John Doe New York NY

// Every function in JavaScript has a built-in method called bind, so in our case we want to define myBind as a method of the Function prototype, so that it can be used with any function.
Function.prototype.myBind = function (...args) {
  // this will refer to the function on which myBind is called
  // store the reference to the original function
  let obj = this,
    params = args.slice(1); // extract the parameters to be passed to the original function
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]); // call the original function with the provided context and arguments
  };
};

let printMyName2 = printName.myBind(name, "Los Angeles");
printMyName2("CA"); // Output: John Doe Los Angeles CA

// additional check for args valid, if printName is not a function, then throw an error
