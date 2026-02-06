# Creating a Promise, Chaining and Error Handling

## Promise Chaining

```js
const cart = ["shoes", "pants", "kurta"];
const promise = createOrder(cart);
promise
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => console.log(paymentInfo))
  .catch((err) => console.log(err.message));

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "12345"; // maybe after DB call
    if (orderId) {
      resolve(orderId);
    } else {
      const err = new Error("OrderId not found");
      reject(err);
    }
  });
  return pr;
}
function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment successful for orderId: " + orderId);
  });
}
function validateCart(cart) {
  return true;
}
```

## Promise Hell

```js
const cart = ["shoes", "pants", "kurta"];
const promise = createOrder(cart);
promise.then((orderId) =>
  proceedToPayment(orderId).then((orderId) => console.log(orderId)),
);
```

## Scenario with Then to continue if err

```js
const cart = ["shoes", "pants", "kurta"];
const promise = createOrder(cart);
promise
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => console.log(paymentInfo))
  .catch((err) => console.log(err.message));
  .then(() => console.log("CALLED NO MATTER WHAT HAPPENS"))
  .catch((err) => console.log("GENERIC ERROR: " + err.message));

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "12345"; // maybe after DB call
    if (orderId) {
      resolve(orderId);
    } else {
      const err = new Error("OrderId not found");
      reject(err);
    }
  });
  return pr;
}
function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment successful for orderId: " + orderId);
  });
}
function validateCart(cart) {
  return false;
}
```

We can have a generic error handling along woth specific erro handling when there are clause sto be executed after a failure.
