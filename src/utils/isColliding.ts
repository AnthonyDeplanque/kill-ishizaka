import { IsCollidingInterface } from "../classes/isCollidingInterface";

/**
 * check if two objects are colliding or not
 * @param param takes objectA and objectB to check their coordinates
 */
export const isColliding = (param: IsCollidingInterface): boolean => {
    const { objectA, objectB } = param;
    if (
        (
            (objectA.x >= objectB.x && objectA.x <= objectB.x + objectB.sizeX) ||
            (objectA.x + objectA.sizeX >= objectB.x && objectA.x + objectA.sizeX <= objectB.x + objectB.sizeX)
            &&
            (objectA.y >= objectB.y && objectA.y <= objectB.y + objectB.sizeY) ||
            (objectA.y + objectA.sizeY >= objectB.y && objectA.y + objectA.sizeY <= objectB.y + objectB.sizeY)
        )
    ) return true;
    return false;
}
