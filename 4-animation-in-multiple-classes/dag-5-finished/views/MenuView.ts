namespace Asteroids {

    export class MenuView extends ViewBase {
        /**
         * Constructor
         * Creates the object and initializes the members
         * @param {HTMLCanvasElement} aCanvas - the canvas where to render to
         * @param aChangeViewCallback -
         */
        public constructor() {
            super();
        }

        protected RenderScreen(): void {
            const centerCoordinate = this.d_canvasHelper.GetCenter();

            //1. add 'Asteroids' text
            this.d_canvasHelper.writeTextToCanvas("Asteroids", 140, centerCoordinate.X, 150);

            //2. add 'Press to play' text
            this.d_canvasHelper.writeTextToCanvas("PRESS PLAY TO START", 40, centerCoordinate.X, centerCoordinate.Y - 20);

            //3. add button with 'start' text
            this.d_canvasHelper.writeButtonToCanvas("Play", 'StartGameCommand', this.StartGame, undefined, centerCoordinate.Y + 200);

            //4. add Asteroid image
            this.d_canvasHelper.writeImageFromFileToCanvas(
                "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png",
                centerCoordinate.X - 50,
                centerCoordinate.Y + 40
            );
        }

        private StartGame = (): void => {
            // get the centerCoordinate
            const center = this.d_canvasHelper.GetCenter();

            this.d_canvasHelper.ChangeView(new GameView());
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
}