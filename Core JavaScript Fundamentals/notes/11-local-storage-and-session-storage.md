# Local Storage and Session Storage

## Web Storage API

Web Storage provides two mechanisms:

- localStorage
- sessionStorage

They store data in key–value pairs, and both:

- Store data as strings
- Are scoped to the same origin
- Have around 5MB storage capacity (varies by browser)

### localStorage

- Persistent storage
- No expiration time
- Data remains even after:
  - Page reload
  - Browser close
- Cleared only by:
  - Manual removal
  - clear()
  - Browser settings
- Storage size: typically ~5MB per origin (depends on browser)

### sessionStorage

- Data exists only for a single browser tab
- Cleared when tab or window is closed
- Different tabs = different sessionStorage
- Capacity: Similar to localStorage (~5MB)

### cookies

Cookies are sent automatically with HTTP requests. Web Storage is purely client-side. Configurable expiry.

## Methods of Web Storage APIs

```js
localStorage.setItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();
localStorage.setItem("user", JSON.stringify({ name: "Crystal" }));
const user = JSON.parse(localStorage.getItem("user"));
```

## Same Origin Policy

Web Storage follows Same Origin Policy.
Origin is defined by:

1. Protocol (http / https)
2. Host (domain)
3. Port

## Use Cases

Good for:

- User preferences (theme, language)
- A/B testing flags
- Caching API responses
- Cart data
- Recently viewed products
- Form drafts
- Navigation state

Avoid storing:

- Sensitive data (tokens, passwords)
- Large files
- Critical security information

Because:

- Accessible via JavaScript
- Vulnerable to XSS attacks

Don’t store JWT tokens in localStorage

## IndexedDB

IndexedDB is a low-level, asynchronous, client-side database built into the browser for storing large amounts of structured data.

It allows storing:

- Objects
- Files
- Blobs
- Large datasets
- Complex structured data

### Why IndexedDB Exists

Limitations of localStorage:

- Only strings
- ~5MB limit
- Synchronous (blocks main thread)
- No indexing
- Not suitable for large data
- IndexedDB solves all of these.

Key Features:

- Asynchronous (non-blocking)
- Stores structured objects
- Supports indexing
- Transaction-based
- Large storage capacity (hundreds of MB, depends on browser/device)
- Works offline
- Progressive Web Apps (PWA)

### Core Concepts in IndexedDB

#### Database

A container for object stores.

```js
const request = indexedDB.open("MyDatabase", 1);
```

#### Object Store

Like a table in SQL.

```js
db.createObjectStore("users", { keyPath: "id" });
```

- Stores objects
- keyPath defines primary key

#### Transaction

All operations happen inside transactions.

```js
const transaction = db.transaction("users", "readwrite");
```

Modes:

- "readonly"
- "readwrite"

#### Index

Used for efficient searching.

```js
objectStore.createIndex("nameIndex", "name", { unique: false });
```
