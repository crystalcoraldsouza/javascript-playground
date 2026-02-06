// Uncomment out one block at a time to try them

function a() {
  console.log(b);
  c();
  function c() {
    console.log(b);
  }
}
var b = 10;
a();

// function a() {
//   var d = 5;
//   console.log(b);
//   c();
//   function c() {
//     console.log(b)
//   }
// }
// var b = 10;
// a();
// console.log(d);
