import { HeroShip } from "../Ships/HeroShip";
import { Coordinates } from "../types/Coordinates";
import { Input } from "./Input";

export class Mouse extends Input {
  public static readonly DEAD_ZONE: number = 5;
  private x: number = HeroShip.INIT_X;
  private y: number = HeroShip.INIT_Y;
  private click: boolean = false;

  constructor() {
    super();
    this.input = "mouse";
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
  public setClick(click: boolean): void {
    this.click = click;
  }

  public getClick(): boolean {
    return this.click;
  }
}
