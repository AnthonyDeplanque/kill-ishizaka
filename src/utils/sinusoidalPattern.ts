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
export const sinusoidalPattern = (object: any, axis: Axis, highLimit: number, lowLimit: number): void => {
    if (object[`${axis}Update`] > highLimit) {
        object[`${axis}Update`] = highLimit;
        object[`${axis}Direction`] *= -1;
    }
    if (object[`${axis}Update`] > lowLimit) {
        object[`${axis}Update`] = lowLimit;
        object[`${axis}Direction`] *= -1;
    }
}