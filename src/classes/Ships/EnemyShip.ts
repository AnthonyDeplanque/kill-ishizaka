import { enemyBuilder } from "../../index";
import { CANVAS } from "../../canvas/Canvas";
import randomize from "../../utils/randomize";
import { sinusoidalPattern } from "../../utils/sinusoidalPattern";
import { Coordinates } from "../types/Coordinates";
import { Ship } from "./Ship";

export class EnemyShip extends Ship {
    private xSpeed: number;
    private ySpeed: number;
    private xUpdate: number;
    private yUpdate: number;
    private xDirection: number;
    private yDirection: number;
    // private readonly pattern: number;

    constructor(
        x: number,
        y: number,
        img: HTMLImageElement
    ) {
        super(x, y, img);
        this.xSpeed = randomize(8, 16);
        this.ySpeed = randomize(10, 15) / 5;
        this.xUpdate = randomize(1, 5);
        this.yUpdate = 0.5;
        this.xDirection = 0.5;
        this.yDirection = 0.5;
    }
    public update(): void {
        const position = this.getPosition();
        const size = this.getSize();
        const speed = this.getSpeed();
        const direction = this.getDirection();
        const update = this.getUpdate();


        if (position.y > CANVAS.height + size.y) {
            position.y = 0 - size.y;
            position.x = enemyBuilder.getPosition();
            this.setPosition(position);
        }
        let patternX: { update: Coordinates, direction: Coordinates }, patternY: { update: Coordinates, direction: Coordinates };

        patternX = sinusoidalPattern(this, "x", 5, -5);
        patternY = sinusoidalPattern(this, "y", 6, -1);

        update.x = patternX!.update.x;
        direction.x = patternX!.direction.x;
        update.y = patternY!.update.y;
        direction.y = patternY!.direction.y;

        position.y += (update.y * speed.y) / 5;
        position.x += (update.x * speed.x) / 10;
        update.x += direction.x;
        update.y += direction.y;



        if (position.x < 0 || position.x > CANVAS.width - size.x) {
            speed.x *= -1;
            if (position.x < 0) {
                position.x = 0;
            }
            if (position.x > CANVAS.width - size.x) {
                position.x = CANVAS.width - size.x;
            }
            this.setSpeed(speed);
        }
        this.setUpdate(update);
        this.setDirection(direction);
        this.setPosition(position);

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

