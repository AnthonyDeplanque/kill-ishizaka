import { CONTEXT } from "../../canvas/Context";
import { Coordinates } from "../types/Coordinates";
import { Shot } from "./Shot";

export class Laser extends Shot {

  public static readonly LASER_SIZE_X = 6;
  public static readonly LASER_SIZE_Y = 30;

  private readonly xSize: number;
  private readonly ySize: number;
  private readonly xSpeed: number;
  private readonly ySpeed: number;


  constructor(
    x: number,
    y: number,
    initialPower?: number,
    powerMultiplier?: number
  ) {
    super(x, y, initialPower, powerMultiplier);
    this.xSize = Laser.LASER_SIZE_X;
    this.ySize = Laser.LASER_SIZE_Y;
    this.xSpeed = 0;
    this.ySpeed = 10;
  }

  protected draw(): void {
    const position = this.getPosition();
    const size = this.getSize();
    CONTEXT.fillStyle = this.getColor();
    CONTEXT.fillRect(position.x, position.y, size.x, size.y)
  }

  protected update(): void {
    const position = this.getPosition();
    const speed = this.getSpeed();
    position.y -= speed.y;
    position.x += speed.x;
    this.setPosition(position);
  }

  public getSize(): Coordinates {
    return {
      x: this.xSize,
      y: this.ySize
    }
  }

  public getSpeed(): Coordinates {
    return {
      x: this.xSpeed,
      y: this.ySpeed
    }
  }

}