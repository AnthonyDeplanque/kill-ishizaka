import { CANVAS } from "./canvas/Canvas";
import { HeroShip } from "./classes/Ships/HeroShip";
import { Keyboard } from "./classes/Keyboard";
import { LIMIT_FOR_CANVAS } from "./variables/Limit";
import { clearCanvas } from "./canvas/clearCanvas";
import { STARDUST } from "./variables/background/starDustInit";
import { Star } from "./classes/Star";
import HERO_IMAGE from "./variables/HeroImage";
import { EnemyBuilder } from "./classes/EnemyBuilder";
import { ENEMY_SWARM } from "./variables/enemies/enemySwarmInit";
import { EnemyShip } from "./classes/Ships/EnemyShip";


CANVAS.width = window.screen.width - LIMIT_FOR_CANVAS;
CANVAS.height = window.screen.height - LIMIT_FOR_CANVAS * 2;

const initX = CANVAS.width / 2; // Initial position of the hero's ship (x)
const initY = (CANVAS.height / 4) * 3; // Initial position of the hero's ship (y)

export const DEBUG = false;

const keyboard = new Keyboard();

document.addEventListener("keydown", (e: KeyboardEvent) => keyboard.setKeyPressed(e));
document.addEventListener("keyup", (e: KeyboardEvent) => keyboard.setKeyUnPressed(e));


const hero = new HeroShip(initX, initY, 4, HERO_IMAGE);

export const enemyBuilder = new EnemyBuilder();


gameLoop();

/**
 * this function clear the canvas and initiate a new image
 * for the canvas. this function is Mandatory to run 
 * properly the canvas
 */
export function gameLoop(): void {

    clearCanvas();
    STARDUST.forEach((star: Star) => star.run());
    ENEMY_SWARM.forEach((enemy: EnemyShip) => enemy.run());

    DEBUG ? hero.drawHitbox() : hero.draw();
    hero.update(keyboard);

    enemyBuilder.run();

    window.requestAnimationFrame(() => gameLoop());
}

