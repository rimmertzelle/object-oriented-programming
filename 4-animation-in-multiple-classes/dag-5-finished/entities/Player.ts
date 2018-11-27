namespace Asteroids {
    export enum ShipColors {BLUE = 0, GREEN, ORANGE, RED, YELLOW};

    export class Player extends EntityBase {

        private static readonly Images = [{
            'Ship1': [
                'playerShip1_blue',
                'playerShip1_green',
                'playerShip1_orange',
                'playerShip1_red',
                'playerShip1_red']
        }, {
            'Ship2': [
                'playerShip2_blue',
                'playerShip2_green',
                'playerShip2_orange',
                'playerShip2_red',
                'playerShip2_red']
        }, {
            'Ship3': [
                'playerShip3_blue',
                'playerShip3_green',
                'playerShip3_orange',
                'playerShip3_red',
                'playerShip3_red']
        }, {
            'Ship4': [
                'ufoBlue',
                'ufoGreen',
                'ufoRed',
                'ufoRed',
                'ufoYellow']
        }];

        private d_image: any = null;

        private d_moveUp: boolean = false;
        private d_moveDown: boolean = false;
        private d_moveRight: boolean = false;
        private d_moveLeft: boolean = false;

        /**
         *
         */
        public constructor() {
            super();
            this.d_Xposition = this.d_canvasHelper.GetCenter().X;
            this.d_Yposition = this.d_canvasHelper.GetCenter().Y;

            this.d_keyboardHelper.addKeyDownCallback('ArrowUp', (): void => {
                this.d_moveUp = true;
                this.d_moveDown = false;
            });
            this.d_keyboardHelper.addKeyDownCallback('ArrowRight', (): void => {
                this.d_moveRight = true;
                this.d_moveLeft = false;
            });
            this.d_keyboardHelper.addKeyDownCallback('ArrowDown', (): void => {
                this.d_moveUp = false;
                this.d_moveDown = true;
            });
            this.d_keyboardHelper.addKeyDownCallback('ArrowLeft', (): void => {
                this.d_moveRight = false;
                this.d_moveLeft = true;
            });

            this.d_keyboardHelper.addKeyUpCallback('ArrowUp', (): void => {
                this.d_moveUp = false;
            });
            this.d_keyboardHelper.addKeyUpCallback('ArrowRight', (): void => {
                this.d_moveRight = false;
            });
            this.d_keyboardHelper.addKeyUpCallback('ArrowDown', (): void => {
                this.d_moveDown = false;
            });
            this.d_keyboardHelper.addKeyUpCallback('ArrowLeft', (): void => {
                this.d_moveLeft = false;
            });
        }

        /**
         *
         * @param aShipName
         * @param aColor
         * @constructor
         */
        public ChangeShip(aShipName: string, aColor: ShipColors) {

            let img = new Image();
            let imgFile = '';
            switch (aShipName.toUpperCase()) {
                case 'UFO':
                    imgFile = `./assets/images/SpaceShooterRedux/PNG/${Player.Images[3].Ship4[aColor]}.png`;
                    break;
                case 'SHIP3':
                    imgFile = `./assets/images/SpaceShooterRedux/PNG/${Player.Images[2].Ship1[aColor]}.png`;
                    break;
                case 'SHIP2':
                    imgFile = `./assets/images/SpaceShooterRedux/PNG/${Player.Images[1].Ship2[aColor]}.png`;
                    break;
                case 'SHIP1':
                default :
                    imgFile = `./assets/images/SpaceShooterRedux/PNG/${Player.Images[0].Ship1[aColor]}.png`;

            }
            img.addEventListener('load', () => {
                //this.d_context.clip();
                this.d_image = img;
            });

            img.src = imgFile;
        }

        /**
         *
         * @UpdateEntity
         */
        protected UpdateEntity(): void {

            if (this.d_moveUp || this.d_moveDown || this.d_moveRight || this.d_moveLeft) {
                if (this.d_moveUp)
                    this.d_Yposition -= 2;
                else if (this.d_moveDown)
                    this.d_Yposition += 3;

                if (this.d_moveRight)
                    this.d_Xposition += 3;
                else if (this.d_moveLeft)
                    this.d_Xposition -= 3;
            }

            if (this.d_image != null)
                this.d_canvasHelper.writeImageToCanvas(this.d_image, this.d_Xposition, this.d_Yposition);
        }

    }
}