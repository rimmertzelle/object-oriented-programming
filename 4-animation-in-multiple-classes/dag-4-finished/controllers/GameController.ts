/// <reference path="../helpers/CanvasHelper.ts"/>
/// <reference path="../base/EntityBase.ts"/>
/// <reference path="../entities/Player.ts"/>
/// <reference path="../entities/Asteroid.ts"/>

namespace Asteroids {

    enum GameStates {
        PAUSED,
        STOPPED,
        RUNNING
    }

    export class GameController {

        //region Singleton design pattern applied (only for the brave souls)
        // singleton.. because we only want one listener to handle the keys
        private static instance: GameController = null;

        public static Instance(): GameController {
            if (this.instance == null) {
                this.instance = new GameController();
            }
            return this.instance;
        }

        // end of singleton
        //endregion

        // define the private properties of the gameController
        private d_canvasHelper: CanvasHelper = CanvasHelper.Instance();

        // we need to keep track of the State of the Game
        // set default to Stopped
        private d_gameState: GameStates = GameStates.STOPPED;

        //region Defining all the game entities
        // we define the player object
        private d_player = new Player();

        // we define the asteroids
        private d_asteroid1 = new Asteroid();
        private d_entities : Array<EntityBase> = new Array<EntityBase>();
        // private d_asteroid2 = new Asteroid();
        // private ........... = new Asteroid();
        // private d_asteroidX = new Asteroid();

        // private d_fuel = new Fuel();

        // private d_powerUp = new PowerUp()

        // private d_somethingCool = new SomethingCool()
        // etc/

        //endregion

        private constructor() {
            for (let idx = 0; idx != 100; ++idx)
            {
                this.d_entities.push(new Asteroid());
            }
            let p = new Player();
            p.ChangeShip('UFO', ShipColors.ORANGE);
            this.d_entities.push(p);

            for (let idx = 0; idx != 8; ++idx)
            {
                // this.d_entities.push(new PowerUp());
            }
        }

        //region Controlling the game state
        public Start(): void {
            // create a new game
            if (this.d_gameState == GameStates.PAUSED)
                return this.Resume();

            this.d_player.ChangeShip('UFO', ShipColors.ORANGE);

            this.d_gameState = GameStates.RUNNING;

            this.GameLoop();
        }

        public Stop(): void {
            this.d_gameState = GameStates.STOPPED;
        }

        public Pause(): void {
            // pause a running game
            this.d_gameState = GameStates.PAUSED;
        }

        public Resume(): void {
            this.d_gameState = GameStates.RUNNING;

            // resume a paused game
            this.GameLoop();
        }

        //endregion

        //region Game loop logic
        private GameLoop = (): void => {
            // the logic for the game loop

            // begin the update
            this.d_canvasHelper.BeginUpdate();
            // clear the canvas
            this.d_canvasHelper.Clear();
            // draw each Asteroid
            //this.d_asteroid1.Update();

            this.d_entities.forEach((element : EntityBase) : void => {
                element.Update();
            });

            // draw the player
            //this.d_player.Update();

            this.d_canvasHelper.EndUpdate();
            // end of the update

            if (this.d_gameState == GameStates.RUNNING) {
                // request the next loop
                requestAnimationFrame(this.GameLoop);
            }

        }
        //endregion

    }
}