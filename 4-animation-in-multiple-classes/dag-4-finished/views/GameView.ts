/// <reference path="../views/MenuView.ts"/>
/// <reference path="../base/ViewBase.ts"/>
/// <reference path="../controllers/GameController.ts"/>


namespace Asteroids {

    export class GameView extends ViewBase {
        //some global player attributes
        // these will not stay here
        // private readonly player: string = "Player1";
        private readonly score: number = 400;

        // private readonly lives: number = 3;

        // the private members of the GameView
        private d_GameController : GameController = GameController.Instance();

        public constructor() {
            super();
        }

        protected RenderScreen(): void {
            //1. load life images
            const lifeImagePath = "./assets/images/SpaceShooterRedux/PNG/UI/playerLife1_blue.png";

            this.d_canvasHelper.writeImageFromFileToCanvas(lifeImagePath, 70, 50);
            this.d_canvasHelper.writeImageFromFileToCanvas(lifeImagePath, 110, 50);
            this.d_canvasHelper.writeImageFromFileToCanvas(lifeImagePath, 150, 50);

            //2. draw current score
            this.d_canvasHelper.writeTextToCanvas(`Score: ${this.score}`, 20, this.d_canvasHelper.GetWidth() - 150, 65, undefined, "right");

            this.d_GameController.Start();
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
}