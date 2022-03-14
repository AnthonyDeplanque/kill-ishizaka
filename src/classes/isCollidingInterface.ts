import { Coordinates } from "./Coordinates";

export interface IsCollidingInterface {
    objectA: ObjectForCollidingInterface;
    objectB: ObjectForCollidingInterface;
}

export interface ObjectForCollidingInterface extends Coordinates {
    xSize: number;
    ySize: number;
}