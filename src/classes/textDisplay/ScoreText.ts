import { SCORE } from "../..";
import { CANVAS } from "../../canvas/Canvas";
import { TextDisplay } from "./TextDisplay";

export class ScoreText extends TextDisplay {
    constructor() {
        const displayWidth: number = 25; // X
        const displayHeight: number = 25; // Y

        super(displayWidth, displayHeight, 32, "Arial", "rgba(255,255,255,1)");
        console.log(displayHeight, displayWidth, CANVAS.height, CANVAS.width);
    }
    draw(): void {
        super.draw();
    }
    update(): void {
        super.setText(`Score : ${SCORE.toString()}`);
    }
    run(): void {
        super.run();
    }
}
