import { EnemyShip } from "../classes/Ships/EnemyShip";
import { Coordinates } from "../classes/types/Coordinates";

export type Axis =
    | "x"
    | "y";

/**
 * this function create a pattern for enemies movement
 * it takes the enemy object, his axis, 
 * a first number to set the high limit 
 * and an other to set the low limit for the movement
 * @param object the enemy object
 * @param axis x or y
 * @param highLimit the high limit for the pattern
 * @param lowLimit the low limit for the pattern
 */
export const sinusoidalPattern = (object: EnemyShip, axis: Axis, highLimit: number, lowLimit: number): { update: Coordinates, direction: Coordinates } => {
    //TODO => Check the sinusoidal pattern
    const update = object.getUpdate();
    const direction = object.getDirection();

    if (update[axis] > highLimit) {
        update[axis] = highLimit;
        direction[axis] *= -1;
    }
    if (update[axis] < lowLimit) {
        update[axis] = lowLimit;
        direction[axis] *= -1;
    }

    return {
        update,
        direction
    };

}