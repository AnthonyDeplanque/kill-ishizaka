import { ObjectsPositionAndSize } from "../classes/types/ObjectsCoordinatesAndSizes";

/**
 * check if two objects are colliding or not
 * @param objectsCoordinates takes objectA and objectB to check their coordinates
 */
export const isColliding = (objectsCoordinates: ObjectsPositionAndSize): boolean => {
    const { objectA, objectB } = objectsCoordinates;
    if (
        (
            (
                objectA.position.x >= objectB.position.x
                && objectA.position.x <= objectB.position.x + objectB.size.x)
            ||
            (
                objectA.position.x + objectA.size.x >= objectB.position.x
                && objectA.position.x + objectA.size.x <= objectB.position.x + objectB.size.x
            )
        )
        &&
        (
            (
                objectA.position.y >= objectB.position.y
                && objectA.position.y <= objectB.position.y + objectB.size.y)
            ||
            (
                objectA.position.y + objectA.size.y >= objectB.position.y
                && objectA.position.y + objectA.size.y <= objectB.position.y + objectB.size.y
            )
        )
    ) {
        return true;
    }

    return false
}
