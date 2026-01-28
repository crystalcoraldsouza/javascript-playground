// Uncomment out one block at a time to try them

// ---
// After initialization
var x = 7;
function getName() {
  console.log("Namaste JavaScript");
}
getName();
console.log(x);

// ---
// Before initialization
// getName();
// console.log(x);
// var x = 7;
// function getName() {
//   console.log("Namaste JavaScript");
// }

// ---
// Without initialization
// getName();
// console.log(x);

// function getName() {
//   console.log("Namaste JavaScript");
// }

// ---
// Function before initialization
// console.log(getName);

// function getName() {
//   console.log("Namaste JavaScript");
// }

// ---
//  Function before initialization with arrow
// getName();
// var getName = () => {
//   console.log("Namaste JavaScript");
// };
// OR;
// var getName = function () {
//   console.log("Namaste JavaScript");
// };

// ---
// Call Stack
// var x = 7; // add breakpoint here
// function getName() {
//   var y = 25;
//   console.log("Namaste JavaScript"); // add breakpoint here
// }
// getName(); // add breakpoint here
// console.log(x); // add breakpoint here
