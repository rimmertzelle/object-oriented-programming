You can find a good description of how Events work on the [Mozilla Developers Network](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events).

In web development de basis rule is that you listen for events to happen. And when these events happen you want to handle these events.

### Event Listener

---

```js
const cupContainer = document.getElementById('watercups');
cupContainer.addEventListener('click', clickCupHandler);
```

In this example we want to handle a click event. First we have to find an element in the DOM to add the eventListener to. In this case we add click eventlistener to a div element with the id ‘watercups’. You can attach numerous events to an element. In the eventlistener we also defined the function `clickCupHandler` to handle the event.

### Event Handler

---

```js
/**
* clickCupHandler
* @param {event} e - the value of the event
*/

public clickCupHandler = (e: Event) => {  
  let element = (<Element>e.target).id;
}
```

In this example we defined a event handler function using the [arrow notations](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Functions/Arrow_functions). In order to retrieve the id of the DOM element we need to cast het e.target (is the clicked element) to an element type.

### Event object

---

In the clickCupHandler we defined the paramater `e: Event`. We can  define this parameter because when an event occurs the event obejct is passed automaticly to the event handler function. In this case we define a superclass Event as the type of the event object. However we can also use a `MouseEvent` or a `keyBoardEvent` as the type. Check [Event types](https://developer.mozilla.org/en-US/docs/Web/API/Event) for more information about which Event Type you want to use.

