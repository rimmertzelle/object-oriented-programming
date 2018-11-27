namespace Asteroids {

    export class Asteroid extends EntityBase {

        private static readonly Images = [
            'meteorBrown_big1',
            'meteorBrown_big2',
            'meteorBrown_big3',
            'meteorBrown_med1',
            'meteorBrown_med3',
            'meteorBrown_tiny1',
            'meteorBrown_tiny2',
            'meteorGrey_big1',
            'meteorGrey_big2',
            'meteorGrey_big3',
            'meteorGrey_med1',
            'meteorGrey_med2',
            'meteorGrey_tiny1',
            'meteorGrey_tiny2'
        ];

        // select a random image for the new asteroid
        private d_image: any = null;

        private d_speed: number = (MathHelper.randomNumber(1, 50)) / 25.0;

        public constructor() {
            super();
            this.d_Xposition = MathHelper.randomNumber(-10, this.d_canvasHelper.GetWidth());
            this.d_Yposition = MathHelper.randomNumber(-10, this.d_canvasHelper.GetHeight() * 3/4);

            let img = new Image();
            img.addEventListener('load', () => {
                //this.d_context.clip();
                this.d_image = img;
            });

            img.src = `./assets/images/SpaceShooterRedux/PNG/Meteors/${Asteroid.Images[MathHelper.randomNumber(0, 11)]}.png`;
        }

        protected UpdateEntity(): void {

            if (this.d_Yposition > this.d_canvasHelper.GetHeight()) {
                this.d_Xposition = MathHelper.randomNumber(-10, this.d_canvasHelper.GetWidth() - 50);
                this.d_Yposition = -50;
                this.d_speed =  (MathHelper.randomNumber(1, 50)) / 25.0;
            }
            this.d_Yposition += this.d_speed;

            if (this.d_image != null)
                this.d_canvasHelper.writeImageToCanvas(this.d_image, this.d_Xposition, this.d_Yposition);
        }
    }
}