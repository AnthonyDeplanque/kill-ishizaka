import { CANVAS } from "./canvas/Canvas";
import { HeroShip } from "./classes/HeroShip";
import { Keyboard } from "./classes/Keyboard";
import { LIMIT_FOR_CANVAS } from "./variables/Limit";
import { clearCanvas } from "./canvas/clearCanvas";
import { STARDUST } from "./variables/background/starDustInit";
import { Star } from "./classes/Star";

CANVAS.width = window.screen.width - LIMIT_FOR_CANVAS;
CANVAS.height = window.screen.height - LIMIT_FOR_CANVAS * 2;

const initX = CANVAS.width / 2; // Initial position of the hero's ship (x)
const initY = (CANVAS.height / 4) * 3; // Initial position of the hero's ship (y)

export const DEBUG = true;

const keyboard = new Keyboard();

document.addEventListener("keydown", (e: KeyboardEvent) => keyboard.setKeyPressed(e));
document.addEventListener("keyup", (e: KeyboardEvent) => keyboard.setKeyUnPressed(e));

const hero = new HeroShip(initX, initY, 4);

gameLoop();

/**
 * this function clear the canvas and initiate a new image
 * for the canvas. this function is Mandatory to run 
 * properly the canvas
 */
export function gameLoop(): void {

    clearCanvas();
    STARDUST.forEach((star: Star) => star.run());
    hero.draw();
    hero.update(keyboard);
    window.requestAnimationFrame(() => gameLoop());
}

