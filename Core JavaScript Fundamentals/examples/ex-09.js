let counter = 0;
const getData = () => {
  const input = document.getElementById("input").value;
  console.log("Fetching Data", input, "..", counter++);
};

const throttleMethod = function (fn, delay) {
  let flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const betterFunction = throttleMethod(getData, 1000);
