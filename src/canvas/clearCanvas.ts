import { CANVAS } from "./Canvas";
import { CONTEXT } from "./Context";

export const clearCanvas = (): void =>
  CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
