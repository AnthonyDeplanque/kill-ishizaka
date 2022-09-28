import { DEBUG } from "./DEBUG";

export const DELAY_TO_RESPAWN: number = !DEBUG ? 2000 : 1; // delay in milliseconds to respawn the heroship when hit;
