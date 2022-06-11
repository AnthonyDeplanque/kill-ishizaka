import { DEBUG } from "../..";
import { CONTEXT } from "../../canvas/Context";
import { Coordinates } from "../types/Coordinates";

export abstract class Ship {
  protected x: number;
  protected y: number;
  private xSize: number;
  private ySize: number;
  protected readonly img?: HTMLImageElement;

  constructor(x: number, y: number, img?: HTMLImageElement) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.xSize = img?.width ? img?.width : 30;
    this.ySize = img?.height ? img?.height : 30;
  }

  public draw(): void {
    CONTEXT.drawImage(this.img!, this.x, this.y);
  }

  public drawHitbox(): void {
    CONTEXT.fillStyle = "rgba(255,0,0,0.5)";
    CONTEXT.fillRect(this.x, this.y, this.xSize, this.ySize);
  }

  public update(param?: unknown): void { }

  public run(): void {
    DEBUG && this.drawHitbox();
    this.draw();
    this.update();
  }

  public getPosition(): Coordinates {
    return {
      x: this.x,
      y: this.y,
    };
  }
  public setPosition(coordinates: Coordinates): void {
    this.x = coordinates.x;
    this.y = coordinates.y;
  }

  public getSize(): Coordinates {
    return {
      x: this.xSize,
      y: this.ySize,
    };
  }
}
