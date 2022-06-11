import { Keyboard } from "../inputs/Keyboard";
import { Mouse } from "../inputs/Mouse";

export type Inputs = Keyboard | Mouse;

export type InputType = "keyboard" | "mouse" | "touchscreen";
