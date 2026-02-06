setTimeout(function () {
  console.log("timer");
}, 5000);
function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});

// Event listener example
// function attachEventListeners() {
//   let counter = 0;
//   document
//     .getElementById("testButton")
//     .addEventListener("click", function xyz() {
//       console.log("Button clicked!", ++counter);
//     });
// }
// attachEventListeners();
