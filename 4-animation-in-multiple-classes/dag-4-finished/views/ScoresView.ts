/// <reference path="../base/ViewBase.ts"/>

namespace Asteroids {

    export class ScoresView extends ViewBase {

        public constructor() {
            super();

        }

        protected RenderScreen(): void {

            let highscores = [
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
            ];

            const Center = this.d_canvasHelper.GetCenter();
            const player: string = 'Ludo';
            const score: number = 99999;


            //1. draw your score
            this.d_canvasHelper.writeTextToCanvas(`${player} score is ${score}`, 80, Center.X, Center.Y - 100);

            //2. draw all highscores
            this.d_canvasHelper.writeTextToCanvas("HIGHSCORES", 40, Center.X, Center.Y);

            highscores.forEach((element, index) => {
                Center.Y += 40;

                this.d_canvasHelper.writeTextToCanvas(
                    `${index + 1}: ${element.playerName} - ${element.score}`,
                    20,
                    Center.X,
                    Center.Y
                );
            });
        }

        protected Cleanup(): void {
        }

    }
}