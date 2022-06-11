import { Coordinates } from "./Coordinates";

export interface ObjectsPositionAndSize {
  objectA: PositionAndSize;
  objectB: PositionAndSize;
}

export interface PositionAndSize {
  position: Coordinates;
  size: Coordinates;
}
