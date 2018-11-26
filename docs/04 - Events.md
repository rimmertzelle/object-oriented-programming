# Event

You can find a good description of how Events work on the [Mozilla Developers Network](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events).

In web development de basis rule is that you listen for events to happen. And when these events happen you want to handle these events.

### Event Listener

---

```Typescript
this.canvas.addEventListener("click", (event: MouseEvent) => 
{
  if (event.x > horizontalCenter - 111 && event.x < horizontalCenter + 111) 
  {
    if (event.y > verticalCenter + 219 && event.y < verticalCenter + 259) 
    {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.level_screen();
      window.addEventListener("keydown", (event) => this.keyDownHandler(event));
      window.addEventListener("keyup", (event) => this.keyUpHandler(event));
    }
  }
});
```

In this code we added an event listener to the canvas Element. When a mouse is clicked within the canvas the eventListener is triggerded. After the start button is clicked the game is started (`level_screen` is loaded) and the `keydown` and `keyup` listeners are added to the windows object.

In this example we defined a event handler function using the [arrow notations] (https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Functions/Arrow_functions). We used the arrow notation to keep the `this` keyword in scope of the class.

### Event object

---

In `this.canvas.addEventListener("click", (event: MouseEvent)` we defined the paramater `event: MouseEvent`. We can  define this parameter because when an event occurs the event obejct is passed to the event handler function. In this case we define a (super)class Event as the type of the event object. However we can also use a `keyBoardEvent` as the type. Check [Event types](https://developer.mozilla.org/en-US/docs/Web/API/Event) for more information about which Event Type you want to use.

