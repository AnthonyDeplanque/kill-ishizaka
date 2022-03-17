import { CANVAS } from "../../canvas/Canvas";
import { Keyboard } from "../inputs/Keyboard";
import { Ship } from "./Ship";
import { KeyboardInterface } from "../types/Keyboard";
import { Mouse } from "../inputs/Mouse";
import { Inputs } from "../types/Inputs";



export class HeroShip extends Ship {
    public static readonly INIT_X = CANVAS.width / 2;
    public static readonly INIT_Y = (CANVAS.height / 4) * 3;
    public static readonly INIT_SPEED = 4;

    private speed: number;

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
    public update(input: Inputs): void {

        let coordinates = this.getPosition();
        const size = this.getSize();
        if (input.getInput() === 'keyboard') {
            const speed = this.getSpeed();
            const key: KeyboardInterface = (input as Keyboard).getKey();
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
        if (input.getInput() === 'mouse') {

            const mousePosition = (input as Mouse).getPosition();

            if (coordinates.x < 0) coordinates.x = 0;
            if (coordinates.x > (CANVAS.width - size.x)) coordinates.x = (CANVAS.width - size.x);
            if (coordinates.y < 0) coordinates.y = 0;
            if (coordinates.y > (CANVAS.height - size.y)) coordinates.y = (CANVAS.height - size.y);


            //get the distance between the mouse and the ship on both axes
            //walk only the an eight of the distance to create a smooth fadeout
            let distanceX = (mousePosition.x - coordinates.x + (size.x / 2)) * .125;
            let distanceY = (mousePosition.y - coordinates.y + (size.y / 2)) * .125;

            //calculate the distance this would move ...
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            //... and cap it at 5px
            if (distance > Mouse.DEAD_ZONE) {
                distanceX *= Mouse.DEAD_ZONE / distance;
                distanceY *= Mouse.DEAD_ZONE / distance;
            }

            coordinates.x += distanceX;
            coordinates.y += distanceY;
            this.setPosition(coordinates)
        }
    }
}
