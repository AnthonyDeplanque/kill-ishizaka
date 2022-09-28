import { DEBUG } from "../variables/DEBUG";
import { CANVAS } from "./Canvas";
import { CONTEXT } from "./Context";

export const clearCanvas = (): void => {
    if (DEBUG) {
        CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
    } else {
        CONTEXT.fillStyle = "rgba(0, 0, 0, 0.4)";
        CONTEXT.fillRect(0, 0, CANVAS.width, CANVAS.height);
    }
};
