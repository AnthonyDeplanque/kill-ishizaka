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
    public getText(): string {
        return this.text;
    }
    public setText(text: string) {
        this.text = text;
    }

    protected draw(): void {
        CONTEXT.font = `${this.size}px ${this.font} ${this.color}`;
        CONTEXT.fillStyle = this.color;
        CONTEXT.fillText(this.text, this.x, this.y);
    }
    protected update(): void {}
    public run(): void {
        this.draw();
        this.update();
    }
}
