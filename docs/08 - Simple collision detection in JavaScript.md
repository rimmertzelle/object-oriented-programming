```typescript
const buzzRect = document.getElementById('buzz').getBoundingClientRect();
```

For simple collision detection in JS you can use the `getBoundingClientRect()` function to get the exacte postion and measurements of the Element in the DOM. In this example we are getting the rectangle properties from an element with the id `buzz`. These properties include: left, top, right, bottom, x, y, width and height. See [javascript info](https://javascript.info/coordinates) for more information.

