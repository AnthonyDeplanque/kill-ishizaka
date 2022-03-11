import { CANVAS } from "./canvas/Canvas";
import { clearCanvas } from "./canvas/clearCanvas";
import { Star } from "./classes/Star";
import { STARDUST } from "./variables/background/starDust";
import { LIMIT_FOR_CANVAS } from "./variables/Limit";

CANVAS.width = window.screen.width - LIMIT_FOR_CANVAS;
CANVAS.height = window.screen.height - LIMIT_FOR_CANVAS * 2;

function gameLoop(): void {
    clearCanvas();
    STARDUST.forEach((star: Star) => star.run());
    window.requestAnimationFrame(gameLoop);
}

gameLoop();
