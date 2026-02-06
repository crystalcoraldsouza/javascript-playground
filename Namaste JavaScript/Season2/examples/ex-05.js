const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 1 failure"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 2 failure"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 3 failure"), 2000);
});

Promise.any([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
    console.log(err.errors);
  });
