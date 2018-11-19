class Ship {
    constructor(name, color, cannons, distanceTravelled) {
        this.name = name;
        this.color = color;
        this.cannons = cannons;
        this.distanceTravelled = distanceTravelled;
    }
    shoot() {
        console.log("Pew pew!");
    }
    move() {
        this.addDistanceTravelled();
        console.log(this.distanceTravelled);
    }
    addDistanceTravelled() {
        this.distanceTravelled++;
    }
}
let spaceShip = new Ship("USS Enterprise", "Grijs", 35, 10000);
for (let i = 0; i < 10; i++) {
    spaceShip.move();
}
//# sourceMappingURL=app.js.map
