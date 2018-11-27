namespace Asteroids {

    export class App {

        // from here we define our new (refactored) members
        private d_canvasHelper: CanvasHelper;

        public constructor(aCanvas: HTMLCanvasElement) {

            // Initialize the CanvasHelper and assign the correct canvas
            this.d_canvasHelper = CanvasHelper.Instance(aCanvas);

            this.d_canvasHelper.ChangeView(new MenuView())
        }
    }
}

//this will get an HTML element. I cast this element in de appropriate type using <>
let init = function () {
    const myGame = new Asteroids.App(<HTMLCanvasElement>document.getElementById('canvas'));
};

//add load listener for custom font types
window.addEventListener('load', init);
