import { CANVAS } from "./Canvas";
import { CONTEXT } from "./Context";

export const clearCanvas = (): void =>{
    CONTEXT.fillStyle="rgba(0, 0, 0, 0.4)";
    CONTEXT.fillRect(0, 0, CANVAS.width, CANVAS.height);
}