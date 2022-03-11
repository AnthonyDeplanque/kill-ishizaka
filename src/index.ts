import { clearCanvas } from "./canvas/clearCanvas";
import { Star } from "./classes/Star";
import { starDustInit } from "./variables/background/starDustInit";

const starDust: Star[] = starDustInit();

function gameLoop(): void {
    clearCanvas();
    starDust.forEach((star: Star) => star.run());
    window.requestAnimationFrame(gameLoop);
}

gameLoop();
