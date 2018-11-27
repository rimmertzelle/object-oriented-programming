class Entity {

    private readonly _xPos: number;
    private readonly _yPos: number;
    private readonly _imageSrc: string;
    private readonly _canvas: Canvas;

    public constructor(canvas: HTMLCanvasElement, imageSource: string, xCoor: number, yCoor: number) {
        this._canvas = new Canvas(canvas);
        this._imageSrc = imageSource;
        this._xPos = xCoor;
        this._yPos = yCoor;
    }

    public draw() {
        this._canvas.writeImageFromFileToCanvas(this._imageSrc, this._xPos, this._yPos);
    }
}
