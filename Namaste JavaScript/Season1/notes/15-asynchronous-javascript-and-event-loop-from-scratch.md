# Asynchronous JavaScript and Event Loop from scratch

`JavaScript` is a `synchronous` `single-threaded` language.

It has `one call stack` and can do one thing at a time. The `call stack` is present in the JavaScript Engine. All the code is executed in the call stack.

## Call Stack Execution

Consider the following `code` and `Call Stack`.

```js
function a() {
  console.log("a");
}
a();
console.log("End");
```

Output:

> a <br/>
> End

> Initial `Call Stack` looks like this:

| Call Stack |
| :--------: |
|   &nbsp;   |
|   &nbsp;   |
|   &nbsp;   |

> Once the code is run, the `Global Executiuon Context (GEC)` is pushed inside the `Call Stack`.

| Call Stack |
| :--------: |
|   &nbsp;   |
|   &nbsp;   |
|    GEC     |

> The whole code executes in the `GEC` line by line.

> First memory is allocated for `a(): with f () definition` attached in `key value` pair.

|   Memory   |  Code  |
| :--------: | :----: |
|   &nbsp;   | &nbsp; |
| a: f {...} | &nbsp; |

> When executing the a() - `a() Execution Context` is created and `pushed` in the `Call Stack`.

| Call Stack |
| :--------: |
|   &nbsp;   |
|    a()     |
|    GEC     |

> Now code of a() is executed line by line until it encouters the end `}`. And `a() Execution Context` is `popped`.

| Call Stack |
| :--------: |
|   &nbsp;   |
|   &nbsp;   |
|    GEC     |

> After finishing the last line, of the code, `GEC` is also `popped` returning to the original state of `Call Stack`.

| Call Stack |
| :--------: |
|   &nbsp;   |
|   &nbsp;   |
|   &nbsp;   |

## Browser Architecture

Main components of a web browser.

```
    _________________________________________________
                      User Interface
    _________________________________________________
            |                                   |
            V                                   |
    ___________________                         |          ___________________
       Browser Engine    -----------------------|------->   Data Persistence
    ___________________                         |          ___________________
            |                                   |
            V                                   |
    _________________________________________   |
                    Rendering Engine            |
    _________________________________________   |
            |               |             |     |
            V               V             V     V
    ______________   _______________   _____________

      Networking       JavaScript         UI Backend
                       Interpreter
    ______________   _______________   _____________
```

### 1. User Interface (UI)

    - Address bar, tabs, back/forward, refresh, bookmarks
    - Everything except the actual page content area

### 2. Browser Engine (coordinates every

thing)

    - Connects UI ↔ rendering engine
    - Handles navigation + high-level control

### 3. Rendering Engine (draws the page)

    - Parses HTML → DOM
    - Parses CSS → CSSOM
    - Combines them → render tree
    - Does layout (sizes/positions)
    - Paints pixels to the screen (with help from GPU)
    - Examples: Blink in Chrome/Edge, WebKit in Safari, Gecko in Firefox

### 4. Networking

    - Fetches files (HTML, CSS, JS, images) over HTTP/HTTPS
    - Caching + security for requests
    - DNS, HTTP/HTTPS, caching, cookies, request priorities, connection pooling

### 5. JavaScript Engine

    - Parses/compiles JS
    - Executes JavaScript (call stack, memory/heap, GC)
    - Interacts with the DOM via bindings
    - Can update the page via Web APIs/DOM
        - DOM APIs (document, querySelector, events)
        - Timers (setTimeout, setInterval)
        - Network (fetch, WebSocket)
        - Storage (localStorage, IndexedDB)
        - Media (camera/mic), geolocation, notifications, etc.

### 6. UI Backend

    - Draws basic widgets (inputs, dropdowns, scrollbars)
    - Uses OS-level drawing under the hood

### 7. Storage / Persistence

    - Saves site/user data locally
    - Cookies, cache, localStorage, IndexedDB

> An important thing to note here is that in web browsers such as Google Chrome each tab runs in a separate process(multiple instances of rendering engine).

## Web APIs

Browser-provided features you can use from JavaScript. They aren't written in JavaScript - implemented by `browser`. They are accessible from `window` (global object) in the browser.

- DOM API
  - document.querySelector(), createElement(), addEventListener()
- Timers
  - setTimeout(), setInterval()
- Fetch / Network
  - fetch(), Headers, Request, Response
- Storage
  - localStorage, sessionStorage, IndexedDB
- Console
  - console.log(), console.error()
- Location / History
  - window.location, history.pushState(), history.back()
- Web Storage / Cookies (related)
  - document.cookie (older, still common)
- Geolocation
  - navigator.geolocation.getCurrentPosition()
- Media Devices
  - navigator.mediaDevices.getUserMedia() (camera/mic)
- Canvas
  - \<canvas> + getContext("2d")
- WebSocket
  - new WebSocket(url) (real-time connection)

## Event Loop and Call Back Queue

`Event Loop` continuously `checks if the call stack is empty`, then `moves ready callbacks` from the `queue` onto the call stack to run. All `Microtasks` are completed before `Callback Queue` is executed.

`Callback Queue` `(Task Queue)` is a waiting line of callback functions (e.g., from timers/events) that will `run once the call stack is free`. If multiple clicks or setTimeouts are there, all the functions are queued in the `Callback Queue`.

`Microtask Queue` is a high-priority queue for callbacks like `Promise` `.then/.catch/finally` and `MutationObserver` that runs `after the current stack finishes `and before the next task/callback queue.

`MutationObserver` is a Web API that lets you watch for `changes in the DOM` (e.g., nodes added/removed, attributes or text changed) and run a callback when they happen.

`Starvation` is when `Microtasks` are creating more `Microtasks` and this is causing a long wait for the `Callback Queue` execution.

### Example of setTimeout working

```js
console.log("Start");
etimeout(function cb() {
  console.log("Callback");
}, 5000);
console.log("End");
```

Output:

> Start <br/>
> End <br/>
> Callback // after 5000ms delay

> Initial empty call stack.

| Call Stack |
| :--------: |
|   &nbsp;   |
|   &nbsp;   |
|   &nbsp;   |

> GEC is pushed in stack.

> `Console API` called and `Start` is logged.

> `setTimeout` registers the `callback` and starts the `5000ms timer`.

> Moves to next line `Console API` and `End` is logged.

| Call Stack |
| :--------: |
|   &nbsp;   |
|   &nbsp;   |
|    GEC     |

> After completion, `GEC` is popped from stack.

| Call Stack |
| :--------: |
|   &nbsp;   |
|   &nbsp;   |
|   &nbsp;   |

> `Timer expires`, and the callback function is pushed in `Callback Queue`.

> The `Event Loop` checkes the `Callback Queue` if anything is present it creates the `Execution Context`and pushes in `Call Stack` and removes from `Callback Queue`.

| Call Stack |
| :--------: |
|   &nbsp;   |
|   &nbsp;   |
|     EC     |

> After completion, `EC` is popped from stack.

| Call Stack |
| :--------: |
|   &nbsp;   |
|   &nbsp;   |
|   &nbsp;   |

---

### Example of fetch working

```js
coole.log("Start");;
setTimeout(function cbT() {
  console.log("Callback setTimeo}, 5000);
tch("https://api.netflix.com").th;en(function cbF() {
  console.log("Callback Netflix");
});
// Assume 10000 lines of code.
console.log("End");
```

- Initial empty call stack. <br/>
- GEC is pushed in stack. <br/>
- `Console API` called and `Start` is logged. <br/>
- `setTimeout` registers the `callback cbT` and starts the `5000ms timer`. <br/>
- Moves to next line `fetch` is called, and `callback cbF` is registered, meanwhile is waiting for a response. If data comes in (earlier than setTimeout), it is pushed into the `Microtask Queue`. `Microtask Queue `is higher priority than `Callback Queue`. <br/>
- `Timer expires`, and the callback function is pushed in `Callback Queue`. <br/>
- Code from GEC is still running since 10000 lines of code. <br/>
- Moves to next line `Console API` and `End` is logged. <br/>
- After completion, `GEC` is popped from stack. <br/>
- The `Event Loop` checkes the `Microtask Queue` if anything is present it creates the `Execution Context`and pushes in `Call Stack` and removes from `Microtask Queue`. <br/>
- After completion, `cbT` is popped from stack. <br/>
- The `Event Loop` checkes the `Callback Queue` if anything is present it creates the `Execution Context`and pushes in `Call Stack` and removes from `Callback Queue`. <br/>
- After completion, `cbF` is popped from stack.
