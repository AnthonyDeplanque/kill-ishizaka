import { CANVAS } from "../../canvas/Canvas";
import randomize from "../../utils/randomize";
import { sinusoidalPattern } from "../../utils/sinusoidalPattern";
import { EnemyBuilder } from "../EnemyBuilder";
import { Coordinates } from "../types/Coordinates";
import { EnemySpeed } from "../types/EnemySpeed";
import { Ship } from "./Ship";

export class EnemyShip extends Ship {
    private xSpeed: number;
    private ySpeed: number;
    private xUpdate: number;
    private yUpdate: number;
    private xDirection: number;
    private yDirection: number;
    private readonly pattern: number;

    constructor(
        x: number,
        y: number,
        img: HTMLImageElement
    ) {
        super(x, y, img);
        this.xSpeed = 10;
        this.ySpeed = 1;
        this.xUpdate = randomize(1, 5);
        this.yUpdate = 0.5;
        this.xDirection = 0.5;
        this.yDirection = 0.5;
        this.pattern = randomize(1, 3);
    }
    public update(): void {
        const coordinates = this.getPosition();
        const size = this.getSize();
        const speed = this.getSpeed();
        const update = this.getUpdate();
        const enemyBuilder = new EnemyBuilder();
        const enemyBuilderPosition = enemyBuilder.getPosition();


        if (coordinates.y > CANVAS.height + size.y) {
            coordinates.y = 0 - size.y
            coordinates.x = enemyBuilderPosition;
        }
        if (coordinates.x < 0 || coordinates.x > CANVAS.width - size.x) {
            speed.x *= -1;
            this.setSpeed(speed);
            if (coordinates.x < 0) {
                coordinates.x = 0;
            }
            if (coordinates.x > CANVAS.width - size.x) {
                coordinates.x = CANVAS.width - size.x;
            }
        }
        switch (this.pattern) {
            case 1:
                sinusoidalPattern(this, "x", 5, -5);
                sinusoidalPattern(this, "y", 5, 2);
                break;
            case 2:
                speed.y = 2
                this.setSpeed(speed);
                sinusoidalPattern(this, "x", 1, -1);
                sinusoidalPattern(this, "y", 10, -2);
                break;
            case 3:
                sinusoidalPattern(this, "x", 5, -1);
                sinusoidalPattern(this, "y", 3, -1);
                coordinates.x += (update.x * speed.x) / 15
                break;
        }
        this.setPosition(coordinates);

    }

    public setSpeed(speed: Coordinates): void {
        this.xSpeed = speed.x;
        this.ySpeed = speed.y;
    }
    public getSpeed(): Coordinates {
        return {
            x: this.xSpeed,
            y: this.ySpeed,
        }
    }
    public getUpdate(): Coordinates {
        return {
            x: this.xUpdate,
            y: this.yUpdate
        }
    }
    public setUpdate(update: Coordinates): void {
        this.xUpdate = update.x
        this.yUpdate = update.y
    }
    public getDirection(): Coordinates {
        return {
            x: this.xDirection,
            y: this.yDirection
        }
    }
    public setDirection(direction: Coordinates): void {
        this.xDirection = direction.x
        this.yDirection = direction.y
    }
}

