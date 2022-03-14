import { ObjectsCoordinatesAndSizes } from "../classes/types/ObjectsCoordinatesAndSizes";

/**
 * check if two objects are colliding or not
 * @param objectsCoordinates takes objectA and objectB to check their coordinates
 */
export const isColliding = (objectsCoordinates: ObjectsCoordinatesAndSizes): boolean => {
    const { objectA, objectB } = objectsCoordinates;
    if (
        (
            (
                objectA.x >= objectB.x
                && objectA.x <= objectB.x + objectB.xSize) ||
            (
                objectA.x + objectA.xSize >= objectB.x
                && objectA.x + objectA.xSize <= objectB.x + objectB.xSize
            )
            &&
            (
                objectA.y >= objectB.y
                && objectA.y <= objectB.y + objectB.ySize) ||
            (
                objectA.y + objectA.ySize >= objectB.y
                && objectA.y + objectA.ySize <= objectB.y + objectB.ySize
            )
        )
    ) return true;
    return false;
}
