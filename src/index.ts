import { CANVAS } from "./canvas/Canvas";
import { HeroShip } from "./classes/Ships/HeroShip";
import { Keyboard } from "./classes/inputs/Keyboard";
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
import { Mouse } from "./classes/inputs/Mouse";
import { mouseListener } from "./game/MouseListener";
import { Explosion } from "./classes/Explosion";
import { displayExplosions } from "./game/displayExplosions";
import { heroCollision } from "./game/HeroCollision";

CANVAS.width = CANVAS.width - LIMIT_FOR_CANVAS;
CANVAS.height = CANVAS.height - LIMIT_FOR_CANVAS * 2;

export const DEBUG = false;

export const keyboard = new Keyboard();
export const mouse = new Mouse();

export const hero: HeroShip = new HeroShip(
  HeroShip.INIT_X,
  HeroShip.INIT_Y,
  HeroShip.INIT_SPEED,
  HERO_IMAGE
);
export const enemyBuilder = new EnemyBuilder();
export const lasers: Laser[] = [];
export const explosions: Explosion[] = [];

const FRAMES_PER_SECOND = 60; // Valid values are 60,30,20,15,10...
// set the mim time to render the next frame
const FRAME_MIN_TIME =
  (1000 / 60) * (60 / FRAMES_PER_SECOND) - (1000 / 60) * 0.5;
let lastFrameTime = 0; // the last frame time

keyboardListener(keyboard);
mouseListener();

/**
 * this function clear the canvas and initiate a new image
 * for the canvas. this function is Mandatory to run
 * properly the canvas
 */
export function gameLoop(time: number): void {
  if (time - lastFrameTime < FRAME_MIN_TIME) {
    //skip the frame if the call is too early
    window.requestAnimationFrame(gameLoop);
    return;
  }
  // render the frame

  clearCanvas();

  STARDUST.forEach((star: Star) => star.run());

  //for each enemy in the swarm, we run the enemy script and we check if the hero collides the enemy
  ENEMY_SWARM.forEach((enemy: EnemyShip) => {
    enemy.run();
    heroCollision(enemy);
  });

  displayExplosions(explosions);

  enemyBuilder.run();
  DEBUG ? hero.drawHitbox() : hero.draw();
  //TODO : made a condition to allow user to choose keyboard or mouse

  // if keyboard
  const key = keyboard.getKey();
  shoot(key.space);
  hero.update(keyboard);

  // if mouse

  shoot(mouse.getClick());
  hero.update(mouse);

  lastFrameTime = time; // remember the time of the rendered frame
  window.requestAnimationFrame(gameLoop); // get next frame
}
window.requestAnimationFrame(gameLoop);
