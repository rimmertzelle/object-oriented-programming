/// <reference path="../base/ViewBase.ts"/>
/// <reference path="..\views\GameView.ts"/>

class MenuView extends ViewBase {
    /**
     * Constructor
     * Creates the object and initializes the members
     * @param {HTMLCanvasElement} aCanvas - the canvas where to render to
     * @param aChangeViewCallback -
     */
    public constructor(aCanvas: HTMLCanvasElement, aChangeViewCallback: (aNewView: ViewBase) => void) {
        super(aCanvas, aChangeViewCallback);
    }

    // CAN BE REMOVED... BECAUSE OF THE MODIFIED WRITE_BUTTON_TO_CANVAS METHOD.. WHICH NOW HANDLES THE CALLBACK
    // protected HandleClick(aXpos: number, aYpos: number): void {
    //
    //     if (aXpos > center.X - 111 && aXpos < center.X + 111) {
    //         if (aYpos > center.Y + 219 && aYpos < center.Y + 259) {
    //             // clear the canvas
    //
    //             // change the View << is explained tomorrow
    //         }
    //     }
    // }

    protected RenderScreen(): void {
        const centerCoordinate = this.d_canvasHelper.GetCenter();

        //1. add 'Asteroids' text
        this.d_canvasHelper.writeTextToCanvas("Asteroids", 140, centerCoordinate.X, 150);

        //2. add 'Press to play' text
        this.d_canvasHelper.writeTextToCanvas("PRESS PLAY TO START", 40, centerCoordinate.X, centerCoordinate.Y - 20);

        //3. add button with 'start' text
        this.d_canvasHelper.writeButtonToCanvas("Play", 'StartGameCommand', this.StartGame, undefined, centerCoordinate.Y + 200);

        //4. add Asteroid image
        this.d_canvasHelper.writeImageToCanvas(
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png",
            centerCoordinate.X - 50,
            centerCoordinate.Y + 40
        );
    }

    private StartGame = (): void => {
        // get the centerCoordinate
        const center = this.d_canvasHelper.GetCenter();

        this.d_changeViewCallback(new GameView(this.d_canvasHelper.GetCanvas(), this.d_changeViewCallback));
    }

    /**
     * Cleanup
     * @AccessModifier {protected}
     * handles the cleanup and deregistration of created method callbacks
     */
    protected Cleanup(): void {
        this.d_canvasHelper.UnregisterClickListener('StartGameCommand');
    }

}