import { mouse } from "..";
import { CANVAS } from "../canvas/Canvas";

const clickHandler = function (): void {
    mouse.setClick(true)

};
const unclickHandler = function (): void {
    mouse.setClick(false)

};

const mouseMoveHandler = (e: MouseEvent): void => {
    mouse.setPosition({
        x: e.offsetX,
        y: e.offsetY
    })

}

export const mouseListener = () => {
    CANVAS.addEventListener("mousedown", () => clickHandler());
    CANVAS.addEventListener("mouseup", () => unclickHandler());
    CANVAS.addEventListener("mousemove", (e: MouseEvent) => mouseMoveHandler(e));
}

