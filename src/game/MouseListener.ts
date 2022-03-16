import { Coordinates } from "../classes/types/Coordinates";

var clickHandler = function (e: MouseEvent): void {

};


const mouseMoveHandler = (e: MouseEvent): Coordinates => {
    return {
        x: e.pageX,
        y: e.pageY
    }
}

export const mouseListener = () => {
    document.addEventListener("click", (e: MouseEvent) => clickHandler(e));
    document.addEventListener("mousemove", (e: MouseEvent) => mouseMoveHandler(e));
}

