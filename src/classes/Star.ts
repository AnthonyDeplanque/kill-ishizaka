import { STAR_TRANSPARENCY } from "../variables/Transparency";
import { CANVAS } from "../canvas/Canvas";
import { CONTEXT } from "../canvas/Context";
import randomize from "../utils/randomize";

export class Star {
    private x: number;
    private y: number;
    private readonly size: number;
    private readonly speed: number;
    private readonly color_r: number;
    private readonly color_g: number;
    private readonly color_b: number;
    private readonly color: string;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = randomize(1, 4);
        this.speed = this.size * 2;
        this.color_r = randomize(150, 255);
        this.color_g = randomize(150, 255);
        this.color_b = randomize(150, 255);
        this.color = `rgba(${this.color_r}, ${this.color_g}, ${this.color_b}, ${STAR_TRANSPARENCY})`;
    };

    public draw() {
        CONTEXT.fillStyle = this.color;
        CONTEXT.beginPath();
        CONTEXT.arc(
            this.x + this.size,
            this.y + this.size,
            this.size / 2,
            0,
            Math.PI * 2
        );
        CONTEXT.fill();
        CONTEXT.closePath();
    };

    public update() {
        this.y += this.speed;
        if (this.y > CANVAS.height) {
            this.y = 0;
            this.x = randomize(1, CANVAS.width);
        }
    }

    public run() {
        this.draw();
        this.update();
    }
}