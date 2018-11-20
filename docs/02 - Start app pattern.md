```js
/*
* Default pattern for setting up an app.
*/
const app : any = {};

//IIFC
(function ()
{
    /**
     * Run after dom is ready
     */
    let init = function ()
    {
        app.game = new Game();
        app.game.start(); //only fired once
    };

    window.addEventListener('load', init);
})();
```

Simple pattern to start an game if the window is loaded.