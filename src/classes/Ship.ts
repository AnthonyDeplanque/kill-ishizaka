import { DEBUG } from "..";
import { CONTEXT } from "../canvas/Context";
import { Coordinates } from "./Coordinates";

export abstract class Ship {

    private x: number;
    private y: number;
    private xSize: number;
    private ySize: number;
    private readonly img: HTMLImageElement;
    private speed: number;

    constructor(x: number, y: number, img: HTMLImageElement, speed: number) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.xSize = img.width;
        this.ySize = img.height;
        this.speed = speed;
    }

    private draw(): void {
        CONTEXT.drawImage(this.img, this.x, this.y)
    }

    private drawHitbox(): void {
        CONTEXT.fillStyle = "rgba(255,0,0,0.5)";
        CONTEXT.fillRect(this.x, this.y, this.xSize, this.ySize)
    }

    private update(): void { }

    public run(): void {
        if (DEBUG) {
            this.drawHitbox();
        }
        this.draw();
        this.update();
    }

    public getPosition(): Coordinates {
        return {
            x: this.x,
            y: this.y
        }
    }
    public setPosition(coordinates: Coordinates): void {
        this.x = coordinates.x;
        this.y = coordinates.y;
    }

    public getSize(): Coordinates {
        return {
            x: this.xSize,
            y: this.ySize
        }
    }

    public getSpeed(): number {
        return this.speed
    }
    public setSpeed(speed: number) {
        this.speed = speed;
    }

}