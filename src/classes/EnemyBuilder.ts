import { DEBUG } from "..";
import { CANVAS } from "../canvas/Canvas";
import { CONTEXT } from "../canvas/Context";
import { LIMIT_FOR_ENEMY_CREATION_IN_PIXELS } from "../variables/Limit";

/**
 * the size in pixels for the creator
 */
export const POSITION_SIZE = 3

/**
 * EnemyBuilter is an drawable or invisible x an y axis point
 * to determine where to pop an enemy
 */
export class EnemyBuilder {
    private x: number // the position on x axis
    private x_direction: 1 | -1 // direction is 1 or -1 to set direction to left or right
    constructor() {
        this.x = LIMIT_FOR_ENEMY_CREATION_IN_PIXELS;
        this.x_direction = 1;
    }
    private draw() {
        //TODO : refactorize color names in a theme or other
        CONTEXT.fillStyle = 'red';
        CONTEXT.fillRect(this.x, LIMIT_FOR_ENEMY_CREATION_IN_PIXELS, POSITION_SIZE, POSITION_SIZE)

    };
    private update() {
        this.x += this.x_direction;
        if (this.x < LIMIT_FOR_ENEMY_CREATION_IN_PIXELS) {
            this.x = LIMIT_FOR_ENEMY_CREATION_IN_PIXELS;
            this.x_direction *= -1;
        }
        if (this.x > (CANVAS.width - LIMIT_FOR_ENEMY_CREATION_IN_PIXELS)) {
            this.x = CANVAS.width - LIMIT_FOR_ENEMY_CREATION_IN_PIXELS;
            this.x_direction *= -1;
        }
    };
    public run() {
        if (DEBUG) {
            this.draw();
        }
        this.update();
    };
    public getPosition(): number {
        return this.x;
    }
}
