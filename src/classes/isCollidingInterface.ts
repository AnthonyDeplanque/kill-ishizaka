export interface IsCollidingInterface {
    objectA: ObjectForCollidingInterface;
    objectB: ObjectForCollidingInterface;
}

export interface ObjectForCollidingInterface {
    x: number;
    y: number;
    sizeX: number;
    sizeY: number;
}