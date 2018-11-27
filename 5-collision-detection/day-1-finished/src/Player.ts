///<reference path="Entity.ts" />

class Player extends Entity {

    public constructor(canvas: HTMLCanvasElement, imageSource: string, xCoor: number, yCoor: number)
    {
        super(canvas, imageSource, xCoor, yCoor);
    }
}
