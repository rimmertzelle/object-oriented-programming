namespace Asteroids {
    export class CanvasHelper {

        // changed from public to private
        private readonly d_canvas: HTMLCanvasElement;
        private readonly d_context: CanvasRenderingContext2D; //this was a bit tricky to find

        private d_clickCommands: Map<string, ButtonAction> = new Map<string, ButtonAction>();

        private d_currentScreen: ViewBase;

        //region Singleton pattern (only for the brave)
        // THIS CLASS NOW IMPLEMENTS THE SINGLETON PATTERN.
        // THE SINGELTON PATTERN IS HELPFULL WHEN THERE ARE RESOURCES
        // WE WOULD LIKE TO SHARE AMONG ALL THE USERS OF THIS RESOURCE
        // AS WE WORK WITH ONE SINGLE CANVAS WE NEED TO HAVE ANYBODY THAT USES
        // THIS HELPER CLASS TO TALK TO THE SAME INSTANCE.
        //
        // singleton.. because we only want one class to write to / read from the canvas
        //
        // FIRSTLY WE CREATE A STATIC VARIABLE CALLED INSTANCE AND INITIALIZE THIS TO NULL
        // STATIC MEANS THAT THERE IS ALWAYS EXACTLY 1 OF THIS VARIABLE. IF WE HAVE NO INSTANCE CREATED
        // THERE IS ALREADY 1 VERSION AVAILABLE, WITH EACHT NEW INSTANCE OF THIS CLASS THE STATIC PARTS
        // WILL STILL BE 1 TIME AROUND.
        //
        // THINK OF THIS AS YOU OWN A CAR.. THE CAR IS THERE WHETHER YOU DRIVE IT OR NOT.
        // IF YOU'D LEND YOUR CAR TO ANOTHER PERSON HE WILL RECEIVE THE SAME INSTANCE (NOT A COPY OR A
        // NEWLY CREATED CAR THAT LOOKS THE SAME). IT WILL BE EXACTLY THE SAME
        private static instance: CanvasHelper = null;

        // WE ALSO CREATE A PUBLIC STATIC METHOD, WHICH HOLDS THE SAME RULES AS THE VARIABLE
        // THIS METHOD CAN BE CALLED.. THE METHOD WILL LOOK AT THE INSTANCE VARIABLE AND IF
        // IT IS NULL IT WILL CREATE A NEW INSTANCE. THIS WILL ONLY HAPPEN THE FIRST TIME
        // THE METHOD IS CALLED. ALL THE OTHER CASES THE INSTANCE IS ALREADY THERE AND IT WILL
        // BE RETURNED. THIS WAY EVERY CLASS THAT NEEDS HELP WITH THE CANVAS GETS THE SAME CLASS
        // TO HELP
        public static Instance(aCanvas: HTMLCanvasElement = null): CanvasHelper {

            if (this.instance == null) {
                if (aCanvas == null) {
                    throw new DOMException("The first time the instance is created a Canvas must be given.");
                }
                this.instance = new CanvasHelper(aCanvas);
            }
            return this.instance;
        }

        // end of singleton
        //endregion)

        /**
         * constructor
         * @AccessModifier {public}
         * Clears the canvas
         * @param {HTMLCanvasElement} aCanvas - the canvas to help with
         */
        // THE CONSTRUCTOR IS CHANGED FROM PUBLIC TO PRIVATE.
        // THIS IS REQUIRED WHEN WE WORK WITH SINGLETONS.
        private constructor(aCanvas: HTMLCanvasElement) {
            // bind the passed argument to the local member
            //construct all canvas
            this.d_canvas = aCanvas;
            this.d_canvas.width = window.innerWidth; // add /2 to allow two games side-by-side horizontal
            this.d_canvas.height = window.innerHeight;// add /2 to allow two games side-by-side vertical

            // get the context from the canvas
            this.d_context = this.d_canvas.getContext('2d');

            // setup a general onClick listener..
            document.addEventListener('click', (event: any) => {
                this.OnClick(event);
            });
        }

        /**
         *
         * @param Event
         * @constructor
         */
        private OnClick(Event: any) {
            let X = Event.x;
            let Y = Event.y;

            this.d_clickCommands.forEach((value: ButtonAction, key: string) => {
                value.ExecuteIfInArea(X, Y);
            });
        }

        /**
         *
         * @param aNewView
         * @constructor
         */
        public ChangeView = (aNewView: ViewBase = null): void => {
            // it the aNewObject is invalid return immediately
            if (aNewView == null) {
                return; // return continuing this method would result in unexpected behaviour.
            }

            // if there is currently a Screen object let that object handle required actions beforeExit
            if (this.d_currentScreen != null) {
                this.d_currentScreen.BeforeExit();
            }
            this.d_currentScreen = aNewView;
            this.d_currentScreen.Render();
        }

        /**
         * Clear
         * @AccessModifier {public}
         * Clears the canvas
         */
        public Clear(): void {
            // clear the screen
            this.d_context.clearRect(0, 0, this.GetWidth(), this.GetHeight());
        }

        /**
         *
         * @constructor
         */
        public BeginUpdate(): void {
            this.d_context.save();
        }

        /**
         *
         * @constructor
         */
        public EndUpdate(): void {
            this.d_context.clip();
            this.d_context.restore();
        }

        /**
         * GetCanvas
         * @AccessModifier {public}
         * Getter to provide access to the canvas
         */
        public GetCanvas(): HTMLCanvasElement {
            return this.d_canvas;
        }

        /**
         * GetCenter
         * @AccessModifier {public}
         * returns the center coordinate
         */
        public GetCenter(): { X: number, Y: number } {
            // return the center as a valid return
            return {X: this.GetWidth() / 2, Y: this.GetHeight() / 2};
        }

        /**
         * GetHeight
         * @AccessModifier {public}
         * returns Height of the canvas
         */
        public GetHeight(): number {
            // return the height of the canvas
            return this.d_canvas.height;
        }

        /**
         * GetWidth
         * @AccessModifier {public}
         * returns the Width of the canvas
         */
        public GetWidth(): number {
            // return the width of the canvas
            return this.d_canvas.width;
        }

        public UnregisterClickListener(fnName: string): void {
            this.d_clickCommands.delete(fnName);
        }

        /**
         * writeTextToCanvas
         * @AccessModifier {public}
         * Handles the internal redirection of the click event.
         * @param {string} text -
         * @param {number} fontSize -
         * @param {number} aXpos -
         * @param {number} aYpos -
         * @param {string} color -
         * @param {CanvasTextAlign} alignment -
         */
        public writeTextToCanvas(aText: string,
                                 aFontSize: number,
                                 aXpos: number,
                                 aYpos: number,
                                 aColor: string = "white",
                                 aAlignment: CanvasTextAlign = "center") {

            this.d_context.font = `${aFontSize}px Minecraft`;
            this.d_context.fillStyle = aColor;
            this.d_context.textAlign = aAlignment;
            this.d_context.fillText(aText, aXpos, aYpos);
        }

        /**
         * writeTextToCanvas
         * @AccessModifier {public}
         * Handles the internal redirection of the click event.
         * @param {string} aSrc - the source of the resource
         * @param {number} aXpos - the x axis value of the coordinate
         * @param {number} aYpos - the y axis value of the coordinate
         */
        public writeImageFromFileToCanvas(aSrc: string,
                                          aXpos: number,
                                          aYpos: number) {

            let image = new Image();
            // add the listener so the waiting will not affect the change
            image.addEventListener('load', () => {
                //this.d_context.clip();
                this.d_context.drawImage(image, aXpos, aYpos);
            });

            // load the source in the image.
            image.src = aSrc;
        }

        public writeImageToCanvas(aImage: any,
                                  aXpos: number,
                                  aYpos: number): void {

            this.d_context.drawImage(aImage, aXpos, aYpos);
        }

        /**
         *     /**
         * writeButtonToCanvas
         * @AccessModifier {public}
         * Creates a button with a given text and set the callback
         *      providing a callback is mandatory for the button has no use
         *      withoud the callback.
         * @param aCaption - the caption to write
         * @param fnName -  the registerd name of the callback
         * @param fn - the callback method (click if the location of the button is clicked)
         * @param aXpos - the left top x position of the button
         * @param aYpos - the left top y position of the button
         */
        public writeButtonToCanvas(aCaption: string, fnName: string, fn: () => void, aXpos: number = -1, aYpos: number = -1) {
            let buttonImage = new Image();
            buttonImage.src = "./assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png";
            // Make sure the image is loaded first otherwise nothing will draw.

            buttonImage.addEventListener('load', (): void => {
                let dx = aXpos;
                let dy = aYpos;
                // if x axis is not set, lets center the button horizontally
                if (dx < 0) dx = (this.GetWidth() - buttonImage.width) / 2;
                // if y axis is not set, lets center the button vertically
                if (dy < 0) dy = this.GetHeight() / 2 + buttonImage.height;

                // center the text based upon the font
                let fontX = dx + ((buttonImage.width + aCaption.length - 18) / 2); // - 1/2 fontsize + buttonBorder
                let fontY = dy + (buttonImage.height - 12); // - 1/2 fontsize + buttonBorder
                this.d_context.drawImage(buttonImage, dx, dy);
                this.writeTextToCanvas(aCaption, 20, fontX, fontY, '#000');

                // check if there is a valid callback given
                // if the callback is valid store the callback in the Map
                if (fn != null) {
                    this.d_clickCommands.set(fnName, new ButtonAction(dx, dy, buttonImage.height, buttonImage.width, fn));
                }
            });

        }
    }
}
