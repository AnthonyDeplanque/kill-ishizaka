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
    ((Math.floor(objectA.position.x) >= Math.floor(objectB.position.x) &&
      Math.floor(objectA.position.x) <=
        Math.floor(objectB.position.x) + Math.floor(objectB.size.x)) ||
      (Math.floor(objectA.position.x) + Math.floor(objectA.size.x) >=
        Math.floor(objectB.position.x) &&
        Math.floor(objectA.position.x) + Math.floor(objectA.size.x) <=
          Math.floor(objectB.position.x) + Math.floor(objectB.size.x))) &&
    ((Math.floor(objectA.position.y) >= Math.floor(objectB.position.y) &&
      Math.floor(objectA.position.y) <=
        Math.floor(objectB.position.y) + Math.floor(objectB.size.y)) ||
      (Math.floor(objectA.position.y) + Math.floor(objectA.size.y) >=
        Math.floor(objectB.position.y) &&
        Math.floor(objectA.position.y) + Math.floor(objectA.size.y) <=
          Math.floor(objectB.position.y) + Math.floor(objectB.size.y)))
  ) {
    DEBUG && console.log("collide!");
    return true;
  }

  return false;
};
