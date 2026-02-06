function x() {
  var a = 7;
  function y() {
    console.log(a); // add breakpoint here
  }
  return y;
}
var z = x();
console.log(z);
z();

// In case of a global variable
// var a = 7;
// function x() {
//   a = 8;
//   function y() {
//     console.log(a); // add breakpoint here
//   }
//   return y;
// }
// var z = x();
// console.log(z);

// a = 9;
// z();

// Nested closures
// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     a = 100;
//     y();
//   }
//   x();
// }
// z();
