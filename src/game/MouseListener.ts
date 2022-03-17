import { mouse } from "..";

const clickHandler = function (): void {
    mouse.setClick(true)

};
const unclickHandler = function (): void {
    mouse.setClick(false)

};

const mouseMoveHandler = (e: MouseEvent): void => {
    mouse.setPosition({
        x: e.clientX,
        y: e.clientY
    })

}

export const mouseListener = () => {
    document.addEventListener("mousedown", () => clickHandler());
    document.addEventListener("mouseup", () => unclickHandler());
    document.addEventListener("mousemove", (e: MouseEvent) => mouseMoveHandler(e));
}

