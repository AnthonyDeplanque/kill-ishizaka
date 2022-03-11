import STARDUST from "./variables/background/starDust";
import { clearCanvas } from "./canvas/clearCanvas";


function gameLoop(): void {
    clearCanvas();
    for (let star of STARDUST) {
        console.log(star);
        star.draw();
    }
    window.requestAnimationFrame(gameLoop);
}

window.onload = (): void => {
    window.requestAnimationFrame(gameLoop);
}