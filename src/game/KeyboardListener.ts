import { Keyboard } from "../classes/inputs/Keyboard"

export const keyboardListener = (keyboard: Keyboard): void => {
    document.addEventListener("keydown", (e: KeyboardEvent) => keyboard.setKeyPressed(e));
    document.addEventListener("keyup", (e: KeyboardEvent) => keyboard.setKeyUnPressed(e));
}