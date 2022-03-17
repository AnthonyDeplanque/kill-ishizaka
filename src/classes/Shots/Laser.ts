import { CONTEXT } from "../../canvas/Context";
import truncate from "../../utils/truncate";
import { Coordinates } from "../types/Coordinates";
import { Shot } from "./Shot";

export class Laser extends Shot {
  private readonly xSize: number;
  private readonly ySize: number;
  private readonly xSpeed: number;
  private readonly ySpeed: number;

  public static readonly LASER_SIZE_X = 6;

  constructor(
    x: number,
    y: number,
    initialPower?: number,
    powerMultiplier?: number
  ) {
    super(x, y, initialPower, powerMultiplier);
    this.xSize = Laser.LASER_SIZE_X;
    this.ySize = 30;
    this.xSpeed = 0;
    this.ySpeed = 12;
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
      x: truncate(this.xSize),
      y: truncate(this.ySize)
    }
  }

  public getSpeed(): Coordinates {
    return {
      x: truncate(this.xSpeed),
      y: truncate(this.ySpeed)
    }
  }

}