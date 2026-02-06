const GITHUB_API = "https://api.github.com/users/crystalcoraldsouza";
const user = fetch(GITHUB_API);
console.log(user);
user.then(function (data) {
  console.log(data);
});
