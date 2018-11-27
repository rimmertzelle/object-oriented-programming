namespace Asteroids {
    export class KeyboardHelper {


    //region private members to keep track of defined callbacks
    private keyPressCallback: Map<string, () => void> = new Map<string, () => void>();
    private keyUpCallback: Map<string, () => void> = new Map<string, () => void>();
    private keyDownCallback: Map<string, () => void> = new Map<string, () => void>();
    //endregion

    //region Singleton design pattern applied (only for the brave souls)
    // singleton.. because we only want one listener to handle the keys
    private static instance: KeyboardHelper = null;

    public static Instance(): KeyboardHelper {
        if (this.instance == null) {
            this.instance = new KeyboardHelper();
        }
        return this.instance;
    }
    // end of singelton
    //endregion

    //region Class CONSTRUCTOR
    private constructor() {
        // listen for keyDown
        document.addEventListener('keydown', this.keyboardDown);
        // listen for keyUp
        document.addEventListener('keyup', this.keyboardUp);
    }
    //endregion

    //region Registration and Clearing of Callbacks
    public addKeyPressCallback(key: string, fn: () => void): void {
        this.keyPressCallback.set(key, fn);
    }

    public addKeyUpCallback(key: string, fn: () => void): void {
        this.keyUpCallback.set(key, fn);
    }

    public addKeyDownCallback(key: string, fn: () => void): void {
        this.keyDownCallback.set(key, fn);
    }

    public clearKeyCallbacks(key: string): void {
        this.keyPressCallback.set(key, null);
        this.keyUpCallback.set(key, null);
        this.keyDownCallback.set(key, null);
    }
    //endregion

    //region What happens on keyDown
    // sdd comment  the = () => is required else the this would not belong to this instance
    private keyboardDown = (event: KeyboardEvent): void => {
        if (this.keyDownCallback.has(event.key)) {
            event.preventDefault();

            let callback: () => void = this.keyDownCallback.get(event.key);
            if (callback != null) {
                callback();
            }
        }
    }
    //endregion

    //region What happens on keyUp
    private keyboardUp = (event: KeyboardEvent): void => {
        if (this.keyUpCallback.has(event.key)) {
            event.preventDefault();

            let callback: () => void = this.keyUpCallback.get(event.key);
            if (callback != null) {
                callback();
            }
        }
        if (this.keyPressCallback.has(event.key)) {
            event.preventDefault();

            let callback: () => void = this.keyPressCallback.get(event.key);
            if (callback != null) {
                callback();
            }
        }
    }
    //endregion
}
}