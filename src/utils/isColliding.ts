import { PositionAndSize } from "../classes/types/ObjectsCoordinatesAndSizes";
import { DEBUG } from "../variables/DEBUG";

/**
 * check if two objects are colliding or not
 * @param objectsCoordinates takes objectA and objectB to check their coordinates
 */
export const isColliding = (objectA: PositionAndSize, objectB: PositionAndSize): boolean => {
    const overlapX =
        (Math.trunc(objectA.position.x) <= Math.trunc(objectB.position.x) + Math.trunc(objectB.size.x) &&
            Math.trunc(objectA.position.x) >= Math.trunc(objectB.position.x)) ||
        (Math.trunc(objectA.position.x) + Math.trunc(objectA.size.x) <=
            Math.trunc(objectB.position.x) + Math.trunc(objectB.size.x) &&
            Math.trunc(objectA.position.x) + Math.trunc(objectA.size.x) >= Math.trunc(objectB.position.x));

    const overlapY =
        (Math.trunc(objectA.position.y) <= Math.trunc(objectB.position.y) + Math.trunc(objectB.size.y) &&
            Math.trunc(objectA.position.y) >= Math.trunc(objectB.position.y)) ||
        (Math.trunc(objectA.position.y) + Math.trunc(objectA.size.y) <=
            Math.trunc(objectB.position.y) + Math.trunc(objectB.size.y) &&
            Math.trunc(objectA.position.y) + Math.trunc(objectA.size.y) >= Math.trunc(objectB.position.y));

    if (DEBUG && overlapX && overlapY) console.log("Collide !");

    return overlapX && overlapY;
};
