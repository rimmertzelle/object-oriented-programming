class KeyboardHelper {

    private keyPressCallback: Map<string, () => void> = new Map<string, () => void>();
    private keyUpCallback: Map<string, () => void> = new Map<string, () => void>();
    private keyDownCallback: Map<string, () => void> = new Map<string, () => void>();

    // singleton.. because we only want one listener to handle the keys
    private static instance: KeyboardHelper = null;

    public static Instance(): KeyboardHelper {
        if (this.instance == null) {
            this.instance = new KeyboardHelper();
        }
        return this.instance;
    }
    // end of singelton

    private constructor() {
        document.addEventListener('keydown', this.keyboardDown);
        document.addEventListener('keyup', this.keyboardUp);
    }

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

    // sdd comment  the = () => is required else the this would not belong to this intance
    private keyboardDown = (event: KeyboardEvent): void => {
        if (this.keyDownCallback.has(event.key)) {
            event.preventDefault();

            let callback: () => void = this.keyDownCallback.get(event.key);
            if (callback != null) {
                callback();
            }
        }
    }

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
}