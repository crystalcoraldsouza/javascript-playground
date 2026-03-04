let counter = 0;
const getData = () => {
  const input = document.getElementById("input").value;
  console.log("Fetching Data", input, "..", counter++);
};

const debounceMethod = function (fn, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const betterFunction = debounceMethod(getData, 1000);
