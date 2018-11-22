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
        //construct all canvas
        this.canvas = aCanvas;

        // get the context from the canvas
        this.ctx = this.canvas.getContext('2d');
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
    public Clear(): void {
        // clear the screen
        this.ctx.clearRect(0, 0, this.GetWidth(), this.GetHeight());
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
        return this.canvas.height;
    }

    /**
     * GetWidth
     * @AccessModifier {public}
     * returns the Width of the canvas
     */
    public GetWidth(): number {
        // return the width of the canvas
        return this.canvas.width;
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

        this.ctx.font = `${aFontSize}px Minecraft`;
        this.ctx.fillStyle = aColor;
        this.ctx.textAlign = aAlignment;
        this.ctx.fillText(aText, aXpos, aYpos);
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

        let image = new Image();

        // add the listener so the waiting will not affect the change
        image.addEventListener('load', () => {
            this.ctx.drawImage(image, aXpos, aYpos);
        });

        // load the source in the image.
        image.src = aSrc;
    }

    /**
     * writeButtonToCanvas
     * @AccessModifier {public}
     * Creates a button with a given text
     * @param {string} aCaption - the caption to write
     * @param {number} aXpos - the left top x position of the button
     * @param {number} aYpos - the left top y position of the button
     */
    public writeButtonToCanvas(aCaption: string, aXpos: number = -1, aYpos: number = -1) {
        let buttonImage = new Image();
        buttonImage.src = "./assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png";
        // Make sure the image is loaded first otherwise nothing will draw.

        buttonImage.addEventListener('load', (): void => {
            let dx = aXpos;
            let dy = aYpos;
            // if x axis is not set, lets center the button horizontally
            if (dx < 0) dx = (this.GetWidth()-buttonImage.width) / 2;
            // if y axis is not set, lets center the button vertically
            if (dy < 0) dy = this.GetHeight() / 2 + buttonImage.height;

            // center the text based upon the font
            let fontX = dx + ((buttonImage.width + aCaption.length - 18) / 2); // - 1/2 fontsize + buttonBorder
            let fontY = dy + (buttonImage.height - 12); // - 1/2 fontsize + buttonBorder
            this.ctx.drawImage(buttonImage, dx, dy);
            this.writeTextToCanvas(aCaption,20, fontX, fontY, '#000');
        });
    }


}