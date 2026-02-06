# Promises

## Async operations using callbacks

The main issue being inversion of control. to the createOrder function, and is not in our control.

```js
const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function () {
  proceedToPayment(orderId);
}); //orderID
```

## Using promises

A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. - MDN docs

Alternate definitions:
Promise is a placeholder for a certain period of time to be filled with some other value. Promise is a container for a future value.

Promises were introduced to:

- Fix callback hell
- Reduce inversion of control
- Make async code easier to read and reason about

A promise can be in exactly one of these states:

- Pending – initial state
- Fulfilled – operation completed successfully
- Rejected – operation failed

Once settled (fulfilled or rejected), a promise cannot change state. It is immutable.

Then is called once we receive the data in the promise object. It is called just once.

```js
const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise.then(function (orderId) {
  proceedToPayment(orderId);
});
// {data: undefined}
```

```js
const GITHUB_API = "https://api.github.com/users/crystalcoraldsouza";
const user = fetch(GITHUB_API);
console.log(user);

user.then(function (data) {
  console.log(data);
});
```

Script:

> user: <value unavailable>

> user: Promise <br />
> [[Prototype]]: Promise <br />
> [[PromiseState]]: "pending" <br />
> [[PromiseResult]]: undefined

> user: Promise <br />
> [[Prototype]]: Promise <br />
> [[PromiseState]]: "fulfilled" <br />
> [[PromiseResult]]: Response

Response is a Readable Stream

## Promise Chaining

```js
const GITHUB_API = "https://api.github.com/users/crystalcoraldsouza";
const user = fetch(GITHUB_API);
console.log(user);

user
  .then(function (data) {
    return proceedtopayment(data);
  })
  .then(function (data) {
    return showorder(data);
  })
  .then((data) => updateWallet(data));
```
