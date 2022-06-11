import { DEBUG } from "../index";
import {
  ObjectsPositionAndSize,
  PositionAndSize,
} from "../classes/types/ObjectsCoordinatesAndSizes";

/**
 * check if two objects are colliding or not
 * @param objectsCoordinates takes objectA and objectB to check their coordinates
 */
export const isColliding = (
  objectA: PositionAndSize,
  objectB: PositionAndSize
): boolean => {
  if (
    ((Math.trunc(objectA.position.x) >= Math.trunc(objectB.position.x) &&
      Math.trunc(objectA.position.x) <=
      Math.trunc(objectB.position.x) + Math.trunc(objectB.size.x)) ||
      (Math.trunc(objectA.position.x) + Math.trunc(objectA.size.x) >=
        Math.trunc(objectB.position.x) &&
        Math.trunc(objectA.position.x) + Math.trunc(objectA.size.x) <=
        Math.trunc(objectB.position.x) + Math.trunc(objectB.size.x))) &&
    ((Math.trunc(objectA.position.y) >= Math.trunc(objectB.position.y) &&
      Math.trunc(objectA.position.y) <=
      Math.trunc(objectB.position.y) + Math.trunc(objectB.size.y)) ||
      (Math.trunc(objectA.position.y) + Math.trunc(objectA.size.y) >=
        Math.trunc(objectB.position.y) &&
        Math.trunc(objectA.position.y) + Math.trunc(objectA.size.y) <=
        Math.trunc(objectB.position.y) + Math.trunc(objectB.size.y)))
  ) {
    DEBUG && console.log("collide!");
    return true;
  }

  return false;
};
