// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Yay1"), 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Yay2"), 10000);
// });

// async function handlePromise() {
//   console.log("Namaste World");
//   const data = await p1;
//     console.log("Namaste World1");
//   console.log(data);

//   const data2 = await p2;
//     console.log("Namaste World2");
//   console.log(data2);

// }
// handlePromise();

// const GITHUB_API = "https://api.github.com/users/crystalcoraldsouza";

// async function handlePromise() {
//   try {
//     const user = await fetch(GITHUB_API);
//     const jsonData = await user.json();
//     console.log(jsonData);
//   } catch (err) {
//     console.log(err);
//   }
// }

// handlePromise();

const GITHUB_API = "https://api.gitddhub.com/users/crystalcoraldsouza";

async function handlePromise() {
  const user = await fetch(GITHUB_API);
  const jsonData = await user.json();
  console.log(jsonData);
}

handlePromise().catch((err) => console.log(err));
