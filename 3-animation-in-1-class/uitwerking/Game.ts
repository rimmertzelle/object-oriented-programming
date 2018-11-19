class Game {
    //global attr for canvas with the right types
    //readonly attributes must be initialized in the constructor
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D; //this was a bit tricky to find

    //some global player objects
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

    //--------Splash screen methods -------------------------------------
    /**
     * Function to initialize the start_screen
     */
    public start_screen() {
        //Asteroids
        this.writeTextToCanvas(140, undefined, 'Asteroids', this.canvas.width / 2, 150);
        //Press to play
        this.writeTextToCanvas(40, undefined, 'PRESS PLAY TO START', this.canvas.width / 2, this.canvas.height / 2 - 20);
        //button
        this.writeButton();
        //Asteroid image
        this.writeImageElementToCanvas('Meteors/meteorBrown_big1', this.canvas.width / 2 - 50, this.canvas.height / 2 + 40);
    }

    //deflection by airtone (c) copyright 2018 Licensed under a Creative Commons Attribution Noncommercial  (3.0) license. http://dig.ccmixter.org/files/airtone/57869 
    public playMusic() {
        const introMusic = new Audio("./resources/sounds/airtone-deflection.mp3");
        introMusic.volume = .12;
        introMusic.load();
        introMusic.play();
    }

    //TODO: because this.writeImageElementToCanvas is not generic enough this function is added. It can not handle callbacks
    public writeButton() {
        let buttonImage: HTMLImageElement = new Image();
        buttonImage.src = "./assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png";
        // Make sure the image is loaded first otherwise nothing will draw.
        buttonImage.addEventListener('load', () => {
            this.ctx.drawImage(buttonImage, this.canvas.width / 2 - 111, this.canvas.height / 2 + 219);
            this.writeTextToCanvas(20, undefined, 'PLay', this.canvas.width / 2, this.canvas.height / 2 + 245, '#000');
        });
    }

    //-------- level screen methods -------------------------------------
    /**
     * Function to show te level_screen
     */
    public level_screen() {
        //load life images
        this.createLifeImages();

        //create score
        this.writeTextToCanvas(20, 'right', `Your score: ${this.score}`, this.canvas.width - 50, 65)

        //random asteroids
        const asteroidsImage: string[] = [
            'meteorBrown_big1',
            'meteorBrown_big2',
            'meteorBrown_big3',
            'meteorBrown_med1',
            'meteorBrown_med3',
            'meteorBrown_tiny1'
        ];
        asteroidsImage.forEach((element) => {
            this.createRandomAsteroid(element);
        });

        //player image
        this.writeImageElementToCanvas('playerShip1_blue', this.canvas.width / 2 - 50, this.canvas.height / 2 - 50);

    }

    //TODO: this.writeImageElementToCanvas is not generic enough. It can not handle callbacks
    public createLifeImages() {
        let playerLifeImage: HTMLImageElement = new Image();
        playerLifeImage.src = "./assets/images/SpaceShooterRedux/PNG/UI/playerLife1_blue.png";
        // Make sure the image is loaded first otherwise nothing will draw.
        playerLifeImage.addEventListener('load', () => {
            let xCoor: number = 30;
            for (let index = 0; index < this.lives; index++) {
                xCoor += 40;
                this.ctx.drawImage(playerLifeImage, xCoor, 50);
            }
        });
    }

    /**
     * 
     * @param {string} imageSource - source of the image 
     */
    public createRandomAsteroid(imageSource: string) {
        //xCoordinate randomly given
        //yCoordinate randomly give
        let xCoor: number = this.randomNumber(50, this.canvas.width - 50);
        let yCoor: number = this.randomNumber(50, this.canvas.height - 50);
        this.writeImageElementToCanvas(`Meteors/${imageSource}`, xCoor, yCoor)
    }

    //--------Title screen methods -------------------------------------

    /**
    * Function render the title screen    
    */
    public title_screen() {
        console.log(this.highscores);

        //start coordinates of titlescreen
        let xCoordinate: number = this.canvas.width / 2;
        let yCoordinate: number = this.canvas.height / 2;

        //your score
        this.writeTextToCanvas(80, undefined, `${this.player} score is ${this.score}`, xCoordinate, yCoordinate - 100);

        //highscores
        this.writeTextToCanvas(40, undefined, 'HIGHSCORES', xCoordinate, yCoordinate);
        this.highscores.forEach((element, index) => {
            yCoordinate += 40;
            console.log(element.score); //shit got to make an interface
            this.writeTextToCanvas(undefined, undefined, `${index + 1}: ${element.playerName} - ${element.score}`, xCoordinate, yCoordinate); //undefined check https://www.typescriptlang.org/docs/handbook/functions.html
        });
    }

    //-------Generic canvas functions ----------------------------------

    /**
    * Generic function to write text to the canvas
    * 
    * @param {number} fontsize - size of the font
    * @param {CanvasTextAlign} align - horizontal alignment of the text 
    * @param {string} message - message on the canvas
    * @param {number} xcoordinate - xcoordinate of the text 
    * @param {number} ycoordinate - ycoordinate of the text 
    */
    // TODO: the parameters in this function can be designed smarter using object and an interface
    public writeTextToCanvas(fontsize: number = 20, align: CanvasTextAlign = 'center', message: string, xcoordinate: number, ycoordinate: number, color?: string) {
        this.ctx.font = `${fontsize}px Minecraft`;
        if (color) {
            this.ctx.fillStyle = color;
        }
        else {
            this.ctx.fillStyle = "#fff";
        }
        this.ctx.textAlign = align;
        this.ctx.fillText(message, xcoordinate, ycoordinate);
    }

    /**
     * 
     * @param {string} imageSrc - source of the image
     * @param {number} xCoordinate - x coordinate of the image
     * @param {number} yCoordinate - y coordinate of the image
     */
    public writeImageElementToCanvas(imageSrc: string, xCoordinate: number, yCoordinate: number) {
        let image: HTMLImageElement = new Image();
        let baseImageAssetsUrl: string = "./assets/images/SpaceShooterRedux/PNG/";
        image.src = `${baseImageAssetsUrl}${imageSrc}.png`;

        // Make sure the image is loaded first otherwise nothing will draw.
        image.addEventListener('load', () => {
            console.log('imageloadEvent');
            this.ctx.drawImage(image, xCoordinate, yCoordinate);
        });
    }

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
//add loadlistener to let de custom font types work
window.addEventListener('load', init);
