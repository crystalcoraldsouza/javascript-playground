# Callback Hell

Callbacks allow asynchronous programiming, but has the following issues.

## Callback Hell

Callback hell happens when you nest many callbacks inside each other to handle asynchronous operations, making code hard to read, hard to debug, and hard to maintain.

```js
getUser(id, function (user) {
  getOrders(user, function (orders) {
    getPaymentDetails(orders, function (payment) {
      sendEmail(payment, function () {
        console.log("Done");
      });
    });
  });
});
```

This creates a pyramid shape, hence the nickname “Pyramid of Doom”.

## Inversion of Control

Inversion of Control means you don’t control when or how your code is executed — instead, you give control to something else (a framework, library, or runtime), which later calls your code.

You pass your function to someone else, and they decide when to call it.

We are giving control to getUser to call getOrders, anyone could've written it. Ww dont know when and how many times it would get executed.

```js
getUser(id, function (user) {
  getOrders(user);
});
```
