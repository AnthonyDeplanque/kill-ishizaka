import { mouse } from "..";

const clickHandler = function (): void {
    mouse.setClick(true)
    console.log(mouse.getClick())
};
const unclickHandler = function (): void {
    mouse.setClick(false)
    console.log(mouse.getClick())
};

const mouseMoveHandler = (e: MouseEvent): void => {
    mouse.setPosition({
        x: e.clientX,
        y: e.clientY
    })
    console.log(mouse.getPosition());
}

export const mouseListener = () => {
    document.addEventListener("mousedown", () => clickHandler());
    document.addEventListener("mouseup", () => unclickHandler());
    document.addEventListener("mousemove", (e: MouseEvent) => mouseMoveHandler(e));
}

