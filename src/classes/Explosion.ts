import { CONTEXT } from "../canvas/Context";
import randomize from "../utils/randomize";
import { TRANSPARENCY } from "../variables/Transparency";

export class Explosion {
    public static MAX_SIZE: number = 40;
    public static MIN_SIZE: number = 2;

    private incrementation: number = 2;
    private readonly maxSize: number;
    private size: number;
    private readonly x: number;
    private y: number;
    private color: string;
    private exist: boolean;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.maxSize = Explosion.MAX_SIZE;
        this.size = Explosion.MIN_SIZE;
        this.exist = true;

        const red: number = randomize(200, 255);
        const green: number = randomize(150, 200);
        const blue: number = 0;

        this.color = `rgba(${red}, ${green}, ${blue}, ${TRANSPARENCY})`
    }
    private draw() {
        CONTEXT.fillStyle = this.color;
        CONTEXT.beginPath();
        CONTEXT.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        CONTEXT.fill();
        CONTEXT.closePath();
    }
    private update() {
        this.setColor();
        this.y += 0.5;
        this.size += this.incrementation;
        if (this.size >= this.maxSize) {
            this.incrementation *= -1;
        }
        if (this.size <= 0) {
            this.exist = false;
        }
    }
    public run() {
        this.draw();
        this.update();
    }
    public getExistence(): boolean {
        return this.exist;
    }
    private setColor(): void {
        const red: number = randomize(200, 255);
        const green: number = randomize(150, 200);
        const blue: number = 0;
        this.color = `rgba(${red}, ${green}, ${blue}, ${TRANSPARENCY})`
    }

}