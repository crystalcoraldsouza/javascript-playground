// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("function x");
// }
// x();

//Print 1 to 5 every second - correct version with let
// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("function x");
// }
// x();

// Print 1 to 5 every second - correct version with var
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(j) {
      setTimeout(function () {
        console.log(j);
      }, j * 1000);
    }
    close(i);
  }
  console.log("function x");
}
x();
