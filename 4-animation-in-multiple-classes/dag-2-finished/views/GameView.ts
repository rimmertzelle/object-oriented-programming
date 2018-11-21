/// <reference path="../base/ViewBase.ts"/>
/// <reference path="../views/MenuView.ts"/>

class GameView extends ViewBase
{
    //some global player attributes
    // these will not stay here
    private readonly player: string = "Player1";
    private readonly score: number = 400;
    private readonly lives: number = 3;

    public constructor(aCanvas : HTMLCanvasElement,aChangeViewCallback : (aNewView : ViewBase) => void ) {
        super(aCanvas,aChangeViewCallback);
    }

    // CAN BE REMOVED
    // protected HandleClick(X: number, Y: number): void {
    //     /* no implementation */
    // }

    protected RenderScreen(): void {
        //1. load life images
        const lifeImagePath = "./assets/images/SpaceShooterRedux/PNG/UI/playerLife1_blue.png";

        this.d_canvasHelper.writeImageToCanvas(lifeImagePath, 70, 50);
        this.d_canvasHelper.writeImageToCanvas(lifeImagePath, 110, 50);
        this.d_canvasHelper.writeImageToCanvas(lifeImagePath, 150, 50);

        //2. draw current score
        this.d_canvasHelper.writeTextToCanvas(`Score: ${this.score}`, 20, this.d_canvasHelper.GetWidth() - 150, 65, undefined, "right");

        //3. draw random asteroids
        const asteroids: Array<string> = [
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big2.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big3.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big4.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_med1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_med3.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_small1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_small2.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_tiny1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_tiny2.png",
        ];

        const maxAsteroidsOnScreen: number = 5;

        for (let i = 0; i < maxAsteroidsOnScreen; i++) {
            const index = MathHelper.randomNumber(0, asteroids.length);

            this.d_canvasHelper.writeImageToCanvas(
                asteroids[index],
                MathHelper.randomNumber(0, this.d_canvasHelper.GetWidth()),
                MathHelper.randomNumber(0, this.d_canvasHelper.GetHeight())
            );
        }
    }

    /**
     * Cleanup
     * @AccessModifier {protected}
     * handles the cleanup and deregistration of created method callbacks
     */
    protected Cleanup(): void {
        //
    }

}