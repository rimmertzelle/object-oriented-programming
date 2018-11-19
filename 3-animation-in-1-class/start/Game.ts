class Game {
    //global attr for canvas
    //readonly attributes must be initialized in the constructor
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;

    //some global player attributes
    private readonly player: string = "Player1";
    private readonly score: number = 400;
    private readonly lives: number = 3;
    private readonly highscores: Array<any>; //TODO: do not use 'any': write an interface!

    public constructor(canvasId: HTMLCanvasElement) {
        //construct all canvas
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        //set the context of the canvas
        this.ctx = this.canvas.getContext('2d');

        this.highscores = [
            {
                playerName: 'Loek',
                score: 40000
            },
            {
                playerName: 'Daan',
                score: 34000
            },
            {
                playerName: 'Rimmert',
                score: 200
            }
        ]

        // all screens: uncomment to activate
        this.start_screen();
        // this.level_screen();
        // this.title_screen();

    }

    //-------- Splash screen methods ------------------------------------
    /**
     * Function to initialize the splash screen
     */
    public start_screen() {
        //1. add 'Asteroids' text
        this.ctx.font = "140px Minecraft";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Asteroids", this.canvas.width / 2, 150);

        //2. add 'Press to play' text
        this.ctx.font = "40px Minecraft";
        this.ctx.fillText("PRESS PLAY TO START", this.canvas.width / 2, this.canvas.height / 2 - 20);

        //3. add button with 'start' text
        let buttonElement = document.createElement("img");
        buttonElement.src = "./assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png";

        buttonElement.addEventListener("load", () => {
            this.ctx.drawImage(buttonElement, this.canvas.width / 2 - 111, this.canvas.height / 2 + 219);
            this.ctx.font = "20px Minecraft";
            this.ctx.fillStyle = "black";
            this.ctx.fillText("Play", this.canvas.width / 2, this.canvas.height / 2 + 245);
        })

        //4. add Asteroid image
        let asteroidElement = document.createElement("img");
        asteroidElement.src = "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png";

        asteroidElement.addEventListener("load", () => {
            this.ctx.drawImage(asteroidElement, this.canvas.width / 2 - 50, this.canvas.height / 2 + 40);
        });
    }

    //-------- level screen methods -------------------------------------
    /**
     * Function to initialize the level screen
     */
    public level_screen() {
        //1. load life images
        const lifeImagePath = "./assets/images/SpaceShooterRedux/PNG/UI/playerLife1_blue.png";
        let xCoor: number = 70;

        for (let i = 0; i < this.lives; i++) {
            let element = document.createElement("img");
            element.src = lifeImagePath;

            element.addEventListener("load", () => {
                xCoor += 40;
                this.ctx.drawImage(element, xCoor, 50);
            });
        }

        //2. draw current score
        this.ctx.font = "20px Minecraft";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "right";
        this.ctx.fillText(`Score: ${this.score}`, this.canvas.width - 50, 65);

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
            const index = this.randomNumber(0, asteroids.length);

            let element = document.createElement("img");
            element.src = asteroids[index];

            element.addEventListener("load", () => {
                this.ctx.drawImage(
                    element,
                    this.randomNumber(0, this.canvas.width),
                    this.randomNumber(0, this.canvas.height),
                );
            });
        }

        //4. draw player spaceship
        let element = document.createElement("img");
        element.src = "./assets/images/SpaceShooterRedux/PNG/playerShip1_blue.png";

        console.log(element)

        element.addEventListener("load", () => {
            this.ctx.drawImage(
                element,
                this.canvas.width / 2 - 50,
                this.canvas.height / 2 - 37
            );
        });
    }

    //-------- Title screen methods -------------------------------------

    /**
    * Function to initialize the title screen
    */
    public title_screen() {
        //1. draw your score
        this.ctx.font = "80px Minecraft";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText(`${this.player} score is ${this.score}`, this.canvas.width / 2, this.canvas.height / 2 - 100);

        //2. draw all highscores
        this.ctx.font = "40px Minecraft";
        this.ctx.fillText("HIGHSCORES", this.canvas.width / 2, this.canvas.height / 2);

        let yCoord = this.canvas.height / 2;
        this.highscores.forEach((element, index) => {
            yCoord += 40;
            this.ctx.font = "20px Minecraft";
            this.ctx.fillText(`${index + 1}: ${element.playerName} - ${element.score}`, this.canvas.width /2, yCoord);
        });
    }

    //-------Generic canvas functions ----------------------------------

    /**
    * Renders a random number between min and max
    * @param {number} min - minimal time
    * @param {number} max - maximal time
    */
    public randomNumber(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }
}

//this will get an HTML element. I cast this element in de appropriate type using <>
let init = function () {
    const Asteroids = new Game(<HTMLCanvasElement>document.getElementById('canvas'));
};

//add loadlistener for custom font types
window.addEventListener('load', init);
