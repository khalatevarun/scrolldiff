## !!steps Initial Buggy Implementation

The original function has a bug where it multiplies price by price instead of price by quantity.

```js ! calculate.js
function calculateTotal(items) {
  let total = 0;
  
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // Bug: multiplying price by price instead of quantity
    total += item.price * item.price;
  }

  return total;
}
```

## !!steps Add Input Validation

First, let's add proper input validation to handle edge cases like empty arrays or null inputs.

```js ! calculate.js
function calculateTotal(items) {
  if (!items || items.length === 0) return 0;

  let total = 0;
  
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // Bug: multiplying price by price instead of quantity
    total += item.price * item.price;
  }

  return total;
}
```

## !!steps Fix the Multiplication Bug

Now we fix the core bug by multiplying price by quantity instead of price by price.

```js ! calculate.js
function calculateTotal(items) {
  if (!items || items.length === 0) return 0;

  let total = 0;
  
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    total += item.price * item.quantity;
  }

  return total;
}
```

## !!steps Improve with Modern JavaScript

Let's modernize the code by using a for...of loop and const for better readability.

```js ! calculate.js
function calculateTotal(items) {
  if (!items || items.length === 0) return 0;

  let total = 0;
  
  for (const item of items) {
    total += item.price * item.quantity;
  }

  return total;
}
```

## !!steps Final Refactored Version

The final version uses reduce for a more functional approach, making the code more concise and expressive.

```js ! calculate.js
function calculateTotal(items) {
  if (!items || items.length === 0) return 0;
  
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}
```
