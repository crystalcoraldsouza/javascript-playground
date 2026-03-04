# Event delegation in JavaScript

## Event Delegation

Event delegation is a technique where a parent element handles events for its child elements using event bubbling.

Instead of attaching listeners to many children, we attach one listener to the parent.

### Example Without Delegation:

```js
<ul id="category">
  <li id="laptops">laptops</div>
  <li id="cameras">cameras</div>
  <li id="shoes">shoes</div>
</ul>
```

```js
document.querySelector("#laptops").addEventListener("click", (e) => {
  console.log("laptops", e);
});
document.querySelector("#cameras").addEventListener("click", (e) => {
  console.log("cameras", e);
});
document.querySelector("#shoes").addEventListener("click", (e) => {
  console.log("shoes", e);
});
```

- Multiple event listeners
- More memory usage
- Harder to maintain
- New items require new listeners

### Example With Delegation

```js
<ul id="category">
  <li id="laptops">laptops</li>
  <li id="cameras">cameras</li>
  <li id="shoes">shoes</li>
</ul>
```

```js
document.querySelector("#category").addEventListener("click", (e) => {
  console.log("category", e.target.id); // on click of laptops, redirect user to a url
  if (e.target.tagName == "LI") window.location.href = "/" + e.target.id;
});
```

What happens

1. Click occurs on `<li>`
2. Event bubbles to `<ul>`
3. Parent listener runs
4. e.target tells which child was clicked

`event.target` (The actual element that triggered the event) vs `event.currentTarget` (The element the listener is attached to)

```js
<div id="form">
  <input id="name" type="text" data-uppercase />
  <input id="pan" type="text" />
  <input id="mobilenum" type="text" />
</div>
```

```js
document.querySelector("#form").addEventListener("keyup", (e) => {
  console.log("category", e.target.id); // on click of laptops, redirect user to a url
  if (e.target.dataset.uppercase != undefined)
    e.target.value = e.target.value.toUpperCase();
});
```

Now one listener handles all list items.

Benefits:

- Better performance (fewer event listeners)
- Lower memory usage
- Easier maintenance
- Works with dynamically added elements, infinite divs can be handled
- Cleaner code

Limitations:

- All events are not bubbled up like blur, focus, resize, scrolling, mouseenter, mouseleave etc
- focusin and focusout do bubble
- You can use capturing phase to handle non-bubbling events
- If using stop propogation, it wont work since you have to allow bubbling
