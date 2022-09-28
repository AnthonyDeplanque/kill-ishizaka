import { limitFloatDecimal } from "../../utils/limitFloatDecimal";
import randomize from "../../utils/randomize";
import { DEBUG } from "../../variables/DEBUG";
import { TRANSPARENCY } from "../../variables/Transparency";
import { Coordinates } from "../types/Coordinates";

export const BULLET_SPEED = 4;

export abstract class Shot {
    private x: number;
    private y: number;
    private readonly color_r: number;
    private readonly color_g: number;
    private readonly color_b: number;
    private readonly color: string;
    private initialPower: number | undefined;
    private powerMultiplier: number | undefined;
    private power: number;

    constructor(x: number, y: number, initialPower?: number, powerMultiplier?: number) {
        this.x = x;
        this.y = y;
        this.initialPower = initialPower;
        this.powerMultiplier = powerMultiplier;
        this.power = initialPower ? (powerMultiplier ? initialPower * powerMultiplier : initialPower) : 1;
        this.color_r = randomize(150, 255);
        this.color_g = randomize(150, 255);
        this.color_b = randomize(150, 255);
        this.color = DEBUG ? "white" : `rgba(${this.color_r}, ${this.color_g}, ${this.color_b}, ${TRANSPARENCY})`;
    }

    protected draw(): void {}

    protected update(): void {}

    public run(): void {
        this.draw();
        this.update();
    }

    public getPosition(): Coordinates {
        return {
            x: this.x,
            y: this.y,
        };
    }

    public setPosition(position: Coordinates): void {
        this.x = limitFloatDecimal(position.x);
        this.y = limitFloatDecimal(position.y);
    }

    public getPower(): number {
        return this.power;
    }

    public getInitialPower(): number | undefined {
        return this.initialPower;
    }

    public getPowerMultiplier(): number | undefined {
        return this.powerMultiplier;
    }

    public getColor(): string {
        return this.color;
    }
}
