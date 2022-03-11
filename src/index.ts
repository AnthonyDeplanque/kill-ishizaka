import { clearCanvas } from "./canvas/clearCanvas";
import { Star } from "./classes/Star";
import { STARDUST } from "./variables/background/starDust";


function gameLoop(): void {
    clearCanvas();
    STARDUST.forEach((star: Star) => star.run());
    window.requestAnimationFrame(gameLoop);
}

gameLoop();
