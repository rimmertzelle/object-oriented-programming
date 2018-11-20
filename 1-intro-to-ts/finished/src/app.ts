class Ship
{
    private name: string;
    public color: string;
    private cannons: number;
    private distanceTravelled: number;

    public constructor(
        name: string,
        color: string,
        cannons: number,
        distanceTravelled: number
    ) {
        this.name = name;
        this.color = color;
        this.cannons = cannons;
        this.distanceTravelled = distanceTravelled;
    }

    public shoot()
    {
        console.log("Pew pew!");
    }

    public move()
    {
        this.addDistanceTravelled();
        console.log(this.distanceTravelled);
    }

    private addDistanceTravelled()
    {
        this.distanceTravelled++;
    }
}

let spaceShip: Ship = new Ship("USS Enterprise", "Grijs", 35, 10000);

for (let i = 0; i < 10; i++) {
    spaceShip.move();
}
