import { CANVAS } from "../canvas/Canvas";
import { Keyboard } from "./Keyboard";
import { Ship } from "./Ship";
import { KeyboardInterface } from "./types/Keyboard";

export class HeroShip extends Ship {
    constructor(
        x: number,
        y: number,
        speed: number,
        img?: HTMLImageElement,
    ) {
        super(x, y, speed, img);
    }

    public update(keyboard: Keyboard): void {

        const key = keyboard.getKey();

        let coordinates = this.getPosition();
        const speed = this.getSpeed();
        const size = this.getSize();
        //TODO : how to switch with an object ?

        if (key.left) {
            console.log(coordinates)
            if (coordinates.x > 0) {
                coordinates.x -= speed;
                this.setPosition(coordinates);
            } else {
                coordinates.x = 0;
                this.setPosition(coordinates);
            }
        }
        if (key.right) {
            console.log(coordinates)
            if (coordinates.x < (CANVAS.width - size.x)) {
                coordinates.x += speed;
                this.setPosition(coordinates);
            } else {
                coordinates.x = (CANVAS.width - size.x);
                this.setPosition(coordinates);
            }
        }
        if (key.up) {
            console.log(coordinates)
            if (coordinates.y > 0) {
                coordinates.y -= speed;
                this.setPosition(coordinates);
            } else {
                coordinates.y = 0;
                this.setPosition(coordinates);
            }
        }
        if (key.down) {
            console.log(coordinates)
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