```typescript
class GameItem {
    //attr
    protected _element: HTMLElement;
    protected _name: string;
    protected _xPos: number;
    protected _yPos: number;

    constructor(name: string, xPosition: number = 0, yPosition: number = 0) {
        this._name = name
        this._xPos = xPosition;
        this._yPos = yPosition;
    }

    public set xPos(xPosition: number): void {
        this._xPos = xPosition;
    }

    public set yPos(yPosition: number): void {
        this._yPos = yPosition;
    }
    
    public move(yPosition: number): void {
        this._yPos -= yPosition;
        this._element.classList.add('flying');
    }

    //drawing the element for the first time
    public draw(container: HTMLElement): void {}

    //updating the state of an element
    public update(): void {
        this._element.style.transform = `translate(${this._xPos}px, ${this._yPos}px)`;
    }
}
```

**Coordinates of an object**

---

In GameItem the xPosition and the yPosition contain the coordinates of the element. We use the draw function to add the element to the DOM. We use the update function to update certain characteristics of the element. In this example we are using the move function to change the values of the x- and yPosition and the update function to update the state of the element. In the update function we are using [transform](<https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate>) property and the translate function to reposition the element.

