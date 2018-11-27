class Canvas {

    private readonly d_canvas: HTMLCanvasElement;
    private readonly d_context: CanvasRenderingContext2D;

    constructor(canvas:HTMLCanvasElement) {
        this.d_canvas = canvas;
        this.d_context = this.d_canvas.getContext('2d');
        console.log('in canvas constructor');
    }

    public Clear(): void {
        // clear the screen
        // this.d_context.clearRect(0, 0, this.GetWidth(), this.GetHeight());
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
}