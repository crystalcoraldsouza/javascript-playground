# Async vs defer attributes in JavaScript

async and defer are boolean attributes used with the `<script>` tag to load external scripts more efficiently without blocking HTML parsing.

They help improve page load performance.

When a browser loads a webpage, two major processes occur:

1. HTML Parsing (building the DOM)

2. Script Loading and Execution
   - Fetching script from the network

   - Executing the script

> JavaScript can block HTML parsing, depending on how scripts are loaded.

## Normal script tag

```js
<script src=""></script>
```

### Behaviour

When the browser encounters the script tag:

1. HTML parsing stops
2. Browser fetches the script
3. Script executes
4. HTML parsing resumes

### Flow

<div align="center">
<pre>
HTML parsing
↓
Script encountered
↓
HTML parsing paused
↓
Script fetched
↓
Script executed
↓
HTML parsing resumed
↓
HTML parsing completed
</pre>
</div>

> This causes render-blocking, which slows page load.

## Async

```js
<script async src=""></script>
```

### Behaviour

1. HTML parsing continues
2. Script is fetched in parallel
3. When the script finishes downloading: HTML parsing pauses temporarily
4. Script executes immediately
5. HTML parsing resumes

### Flow

<div align="center">
<pre>
HTML parsing
↓
Script encountered
↓
Script fetched asynchronously
↓
Script received
↓
HTML parsing paused
↓
Script executed
↓
HTML parsing resumed
↓
HTML parsing completed
</pre>
</div>

> Scripts execute as soon as they are ready </br>
> Execution order is NOT guaranteed <br/>
> Scripts do not wait for DOM parsing

## Defer

```js
<script defer src=""></script>
```

### Behaviour

1. HTML parsing continues
2. Script is fetched in parallel
3. Script waits until HTML parsing finishes
4. Then scripts execute in order

### Flow

<div align="center">
<pre>
HTML parsing
↓
Script encountered
↓
Script fetched asynchronously
↓
Script received
↓
HTML parsing completed
↓
Script executed
</pre>
</div>

> Scripts execute after DOM parsing <br/>
> Execution order is preserved <br/>
> Works only with external scripts

## What to use when?

### Use async

For independent scripts that don't rely on other scripts or DOM structure.
Examples:

- Analytics
- Ads
- Tracking scripts

### Use defer

For scripts that depend on DOM or other scripts.

```js
<script defer src="app.js"></script>
<script defer src="utils.js"></script>
```

They will execute in the same order.

## Critical Rendering Path (CRP)

The Critical Rendering Path is the sequence of steps the browser follows to convert HTML, CSS, and JavaScript into pixels on the screen.

Goal:
Render the webpage as fast as possible.

### Main Steps of the Critical Rendering Path

```js
HTML → DOM
CSS  → CSSOM
DOM + CSSOM → Render Tree
Render Tree → Layout
Layout → Paint
```

### HTML → DOM

The browser downloads HTML and parses it into a DOM (Document Object Model).
HTML:

```js
<body>
  <h1>Hello</h1>
  <p>World</p>
</body>
```

DOM Tree:

```js
Document
 └── body
      ├── h1
      └── p
```

> HTML is parsed top to bottom.

### CSS → CSSOM

CSS is parsed into the CSS Object Model.
CSS:

```js
h1 { color: red; }
p { color: blue; }
```

CSSOM Tree:

```js
Stylesheet
 ├── h1
 └── p
```

> CSS is render-blocking <br/>
> The browser must finish CSS before rendering.

### DOM + CSSOM → Render Tree

The browser combines DOM and CSSOM into a Render Tree.
Render Tree includes:

- visible elements
- computed styles

```js
Render Tree
 ├── h1 (color: red)
 └── p (color: blue)
```

> Hidden elements `(display:none)` are not included.

### Layout (Reflow)

The browser calculates exact positions and sizes of elements.

```js
h1 → top: 0px
p  → top: 40px
```

This step determines geometry of elements.

### Paint

Finally, the browser draws pixels on the screen.

Things painted include:

- text
- colors
- borders
- shadows
- images
