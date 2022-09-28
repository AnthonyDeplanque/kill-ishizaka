import { DEBUG } from "../index";
import { PositionAndSize } from "../classes/types/ObjectsCoordinatesAndSizes";

/**
 * check if two objects are colliding or not
 * @param objectsCoordinates takes objectA and objectB to check their coordinates
 */
export const isColliding = (objectA: PositionAndSize, objectB: PositionAndSize): boolean => {
    const overlapX =
        (objectA.position.x <= objectB.position.x + objectB.size.x && objectA.position.x >= objectB.position.x) ||
        (objectA.position.x + objectA.size.x <= objectB.position.x + objectB.size.x &&
            objectA.position.x + objectA.size.x >= objectB.position.x);

    const overlapY =
        (objectA.position.y <= objectB.position.y + objectB.size.y && objectA.position.y >= objectB.position.y) ||
        (objectA.position.y + objectA.size.y <= objectB.position.y + objectB.size.y &&
            objectA.position.y + objectA.size.y >= objectB.position.y);

    if (DEBUG && overlapX && overlapY) console.log("Collide !");

    return overlapX && overlapY;
};
