import { CONTEXT } from "../../canvas/Context";

export abstract class TextDisplay {
    private x: number;
    private y: number;
    private text: string;
    private font: string;
    private size: number;
    private color: string;

    constructor(x: number, y: number, size: number, font: string, color: string) {
        this.x = x;
        this.y = y;
        this.text = "";
        this.size = size;
        this.font = font;
        this.color = color;
    }
    getText(): string {
        return this.text;
    }
    setText(text: string) {
        this.text = text;
    }

    draw(): void {
        CONTEXT.font = `${this.size}px ${this.font} ${this.color}`;
        CONTEXT.fillStyle = this.color;
        CONTEXT.fillText(this.text, this.x, this.y);
    }
    update(): void {}
    run(): void {
        this.draw();
        this.update();
    }
}
