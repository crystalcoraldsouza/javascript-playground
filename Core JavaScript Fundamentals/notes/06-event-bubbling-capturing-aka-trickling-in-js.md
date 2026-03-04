# Event bubbling, capturing aka trackling in JavaScript

## Event Propagation

Event propagation is the process by which an event travels through the DOM tree when it occurs on an element.

### Event Propagation Phases

When an event happens (like a click), the browser propagates the event through different elements in the DOM hierarchy.

Every DOM event goes through three phases:

1. Capturing Phase – event travels down the DOM
2. Target Phase – event reaches the target element
3. Bubbling Phase – event bubbles back up

## Event Bubbling

Event bubbling is the default event propagation mechanism in JavaScript where an event starts from the target element and propagates upward through its ancestors in the DOM.

HTML:

```js
<div id="parent">
  <button id="child">Click</button>
</div>
```

Event listeners:

```js
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});
```

Output:

> Child clicked<br/>
> Parent clicked

The event bubbles upward through the DOM tree.

## Event Capturing aka Trickling

Event capturing (also called trickling) is the opposite of bubbling. The event travels from the root of the DOM down to the target element.

To enable capturing, use the third parameter of addEventListener, "useCapture" boolean argument.

```js
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked");
  },
  true,
);
```

Now the parent runs before the child.

### Example of varied capturing and bubbling

```js
document.getElementById("grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent clicked");
  },
  true,
);
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked");
  },
  false,
);
document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("Child clicked");
  },
  true,
);
```

Output:

> Grandparent clicked<br/>
> Child clicked<br/>
> Parent clicked

### Example of stopping propagation

```js
document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("Child clicked");
    e.stopPropogation();
  },
  true,
);
```

This way we can avoid the other bubbling or parent and grandparent or you can stop at the capturing of parent.
