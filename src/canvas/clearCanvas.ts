import { CANVAS } from "./Canvas";
import { CONTEXT } from "./Context";

const clearCanvas = (): void => CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);

export default clearCanvas;