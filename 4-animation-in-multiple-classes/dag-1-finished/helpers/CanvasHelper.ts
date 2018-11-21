class CanvasHelper {

    public readonly canvas: HTMLCanvasElement;
    public readonly ctx: CanvasRenderingContext2D; //this was a bit tricky to find

    /**
     * constructor
     * @AccessModifier {public}
     * Clears the canvas
     * @param {HTMLCanvasElement} aCanvas - the canvas to help with
     */
    public constructor(aCanvas: HTMLCanvasElement) {
        // bind the passed argument to the local member


        // get the context from the canvas

        ;
    }

    /**
     * RegisterOnClick
     * @AccessModifier {public}
     * Clears the canvas
     * @param aCallBack -
     */
    public RegisterOnClick(aCallBack: (x_axis: number, y_axis: number) => void) {
        // register an event listener to handle click events
        this.canvas.addEventListener('click', (aEvent: MouseEvent) => {
            // when this event is handles call the local OnClick method.
            aCallBack(aEvent.x, aEvent.y);
        });
    }

    /**
     * Clear
     * @AccessModifier {public}
     * Clears the canvas
     */
    public Clear() {
        // clear the screen
    }

    /**
     * GetCenter
     * @AccessModifier {public}
     * returns the center coordinate
     */
    public GetCenter() : {X : number, Y: number} {
        // return the center as a valid return
    }

    /**
     * GetHeight
     * @AccessModifier {public}
     * returns Height of the canvas
     */
    public GetHeight() : number {
        // return the height of te canvas
    }

    /**
     * GetWidth
     * @AccessModifier {public}
     * returns the Width of the canvas
     */
    public GetWidth() : number {
        // return the height of the canvas
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
    public writeTextToCanvas(text: string,
                              fontSize: number,
                              aXpos: number,
                              aYpos: number,
                              color: string = "white",
                              alignment: CanvasTextAlign = "center") {

        // copy content from the game.ts and make it error free
    }

    /**
     * writeTextToCanvas
     * @AccessModifier {public}
     * Handles the internal redirection of the click event.
     * @param {string} aSrc - the source of the resource
     * @param {number} aXpos - the x axis value of the coordinate
     * @param {number} aYpos - the y axis value of the coordinate
     */
    public writeImageToCanvas(aSrc: string,
                               aXpos: number,
                               aYpos: number) {

        // copy content from the game.ts and make it error free
        // keep in mind that we do not support the printing of multiple side-by-side images
        // as it does in the game.ts
    }

    /**
     * writeButtonToCanvas
     * @AccessModifier {public}
     * Creates a button with a given text
     * @param {string} aCaption - the caption to write
     * @param {number} aXpos - the left top x position of the button
     * @param {number} aYpos - the left top y position of the button
     */
    public writeButtonToCanvas(aCaption: string,aXpos: number = -1, aYpos: number = -1) {
        // copy content from the game.ts and make it error free
        // adjust for the different arguments as are available in the game.ts.

    }


}