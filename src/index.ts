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
import { shoot } from "./game/Shoot";
import { Laser } from "./classes/Shots/Laser";
import { keyboardListener } from "./game/KeyboardListener";


CANVAS.width = window.screen.width - LIMIT_FOR_CANVAS;
CANVAS.height = window.screen.height - LIMIT_FOR_CANVAS * 2;

const initX = CANVAS.width / 2; // Initial position of the hero's ship (x)
const initY = (CANVAS.height / 4) * 3; // Initial position of the hero's ship (y)

export const DEBUG = false;

export const keyboard = new Keyboard();
export const hero = new HeroShip(initX, initY, 4, HERO_IMAGE);
export const enemyBuilder = new EnemyBuilder();
export const lasers: Laser[] = [];

const FRAMES_PER_SECOND = 60;  // Valid values are 60,30,20,15,10...
// set the mim time to render the next frame
const FRAME_MIN_TIME = (1000 / 60) * (60 / FRAMES_PER_SECOND) - (1000 / 60) * 0.5;
let lastFrameTime = 0;  // the last frame time

keyboardListener(keyboard);

/**
 * this function clear the canvas and initiate a new image
 * for the canvas. this function is Mandatory to run 
 * properly the canvas
 */
export function gameLoop(time: number): void {

    if (time - lastFrameTime < FRAME_MIN_TIME) { //skip the frame if the call is too early
        window.requestAnimationFrame(gameLoop);
        return;
    }
    // render the frame

    clearCanvas();


    STARDUST.forEach((star: Star) => star.run());

    ENEMY_SWARM.forEach((enemy: EnemyShip) => enemy.run());

    const keyboardShoot = keyboard.getKey().space;
    shoot(keyboardShoot);

    DEBUG ? hero.drawHitbox() : hero.draw();
    hero.update(keyboard);

    enemyBuilder.run();

    lastFrameTime = time; // remember the time of the rendered frame
    window.requestAnimationFrame(gameLoop); // get next frame

}
window.requestAnimationFrame(gameLoop)
