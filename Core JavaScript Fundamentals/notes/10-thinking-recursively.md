# Thinking recursively

Recursion is a technique where a function calls itself to solve smaller instances of the same problem.

## Object flattening using recursion

Write a function to take obj as an iput and return as a new obj with specific structure.

### Input

```js
let user = {
  name: "Crystal",
  address: {
    personal: {
      city: "coventry",
      area: "midlands",
    },
    office: {
      city: "birmingham",
      area: {
        landmark: "bull ring",
      },
    },
  },
};
```

### Expected output

```js
let finalObj = {
  user_name: "Crystal",
  user_address_personal_city: "coventry",
  user_address_personal_area: "midlands",
  user_address_office_city: "birmingham",
  user_address_office_area_landmark: "bull ring",
};
```

### Solution

```js
function convertFun(obj, parent, result = {}) {
  console.log("obj:", obj, "parent:", parent);
  for (let key of Object.keys(obj)) {
    console.log("key:", key);
    if (
      typeof obj[key] === "object" &&
      !Array.isArray(obj[key]) &&
      obj[key] !== null
    ) {
      convertFun(obj[key], parent + "_" + key);
    } else {
      result[parent + "_" + key] = obj[key];
      console.log("result:", result);
    }
  }
  return result;
}
const finalObj = convertFun(user, "user");
```

> for...in iterates over prototype properties too.
