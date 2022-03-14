import { Coordinates } from "./Coordinates";

export interface ObjectsCoordinatesAndSizes {
    objectA: ObjectCoordinatesAndSizesInterface;
    objectB: ObjectCoordinatesAndSizesInterface;
}

export interface ObjectCoordinatesAndSizesInterface extends Coordinates {
    xSize: number;
    ySize: number;
}