// Block
// {
// }

// This is a block
// {
//   var a = 10;
//   console.log(a);
// }

// Single statement expected
// if (true) true;

// Block with multiple statements
// if (true) {
//   var a = 10;
//   console.log(a);
// }

// Hoisting of variables in block
// var a = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// // Block scope disappears here for let and const
// console.log(a); // Shadowed variable from block
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError

// Illegal shadowing
var a = 200;
function b() {
  let a = 20;
  console.log(a);
}
b();
console.log(a);
