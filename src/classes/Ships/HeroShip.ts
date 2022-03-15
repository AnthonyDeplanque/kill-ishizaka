import { CANVAS } from "../../canvas/Canvas";
import { Keyboard } from "../Keyboard";
import { Ship } from "./Ship";
import { KeyboardInterface } from "../types/Keyboard";

export class HeroShip extends Ship {
    speed: number;
    constructor(
        x: number,
        y: number,
        speed: number,
        img?: HTMLImageElement,
    ) {
        super(x, y, img);
        this.speed = speed;
    }

    public getSpeed(): number {
        return this.speed
    }
    public setSpeed(speed: number) {
        this.speed = speed;
    }
    public update(keyboard: Keyboard): void {

        const key: KeyboardInterface = keyboard.getKey();

        let coordinates = this.getPosition();
        const speed = this.getSpeed();
        const size = this.getSize();
        //TODO : how to switch with an object ?

        if (key.left) {
            if (coordinates.x > 0) {
                coordinates.x -= speed;
                this.setPosition(coordinates);
            } else {
                coordinates.x = 0;
                this.setPosition(coordinates);
            }
        }
        if (key.right) {
            if (coordinates.x < (CANVAS.width - size.x)) {
                coordinates.x += speed;
                this.setPosition(coordinates);
            } else {
                coordinates.x = (CANVAS.width - size.x);
                this.setPosition(coordinates);
            }
        }
        if (key.up) {
            if (coordinates.y > 0) {
                coordinates.y -= speed;
                this.setPosition(coordinates);
            } else {
                coordinates.y = 0;
                this.setPosition(coordinates);
            }
        }
        if (key.down) {

            if (coordinates.y < (CANVAS.height - size.y)) {
                coordinates.y += speed;
                this.setPosition(coordinates);
            } else {
                coordinates.y = (CANVAS.height - size.y);
                this.setPosition(coordinates);
            }
        }
    }
}