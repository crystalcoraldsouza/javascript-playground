# How functions work in JS and variable environments

```js
var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
```

## Phase 1:

|    Memory    |  Code  |
| :----------: | :----: |
| x: undefined | &nbsp; |
|   a: {...}   | &nbsp; |
|   b: {...}   | &nbsp; |

| Call Stack |
| :--------: |
|   &nbsp;   |
|   &nbsp;   |
|    GEC     |

## Phase 2:

var x = 1; executed

|  Memory  |   Code   |
| :------: | :------: |
|   x: 1   | var x= 1 |
| a: {...} |  &nbsp;  |
| b: {...} |  &nbsp;  |

| Call Stack |
| :--------: |
|   &nbsp;   |
|   &nbsp;   |
|    GEC     |

---

> `a()` is executed

### a() Phase 1:

|  Memory  |         Code          |
| :------: | :-------------------: |
|   x: 1   |       var x= 1        |
| a: {...} |     Memory / Code     |
|  &nbsp;  | x: undefined / &nbsp; |
| b: {...} |        &nbsp;         |

---

### a() Phase 2:

|  Memory  |          Code           |
| :------: | :---------------------: |
|   x: 1   |        var x= 1         |
| a: {...} |      Memory / Code      |
|  &nbsp;  |   x: 10 / var x = 10;   |
|  &nbsp;  | x: 10 / console.log(x); |
| b: {...} |         &nbsp;          |

| Call Stack |
| :--------: |
|   &nbsp;   |
|    a()     |
|    GEC     |

| Call Stack |
| :--------: |
|   &nbsp;   |
|   &nbsp;   |
|    GEC     |

Similaryly for `b()`
