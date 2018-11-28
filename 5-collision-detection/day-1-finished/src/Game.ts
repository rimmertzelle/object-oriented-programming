///<reference path="Canvas.ts" />
///<reference path="Zombie.ts" />
///<reference path="Player.ts" />

class Game {

    private readonly _canvas: Canvas;
    private readonly _player: Player;
    private readonly _zombie1: Zombie;

    constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new Canvas(canvasElement);
        this._player = new Player(canvasElement, './assets/images/player.png', 100, 100);
        this._zombie1 = new Zombie(canvasElement, './assets/images/Zombies/4ZombieFrontSPAWN.png', 10, 10);
        console.log('in game constructor');
        this.draw();
    }

    public draw(){
        //this.d_canvas.writeImageFromFileToCanvas();
        this._player.draw();
        this._zombie1.draw();
    }
}

window.addEventListener('load', init);

function init(): void {
    const ZombieGame = new Game();
}
