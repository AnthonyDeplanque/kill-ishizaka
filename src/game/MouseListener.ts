import { hero, mouse } from "..";
import { CANVAS } from "../canvas/Canvas";

const clickHandler = function (): void {
  mouse.setClick(true);
};
const unclickHandler = function (): void {
  mouse.setClick(false);
};

const mouseMoveHandler = (e: MouseEvent): void => {
  const heroSize = hero.getSize();
  mouse.setPosition({
    x: e.offsetX - heroSize.x,
    y: e.offsetY - heroSize.y,
  });
};

/**
 * this is the listener for the mouse
 */
export const mouseListener = () => {
  CANVAS.addEventListener("mousedown", () => clickHandler());
  CANVAS.addEventListener("mouseup", () => unclickHandler());
  CANVAS.addEventListener("mousemove", (e: MouseEvent) => mouseMoveHandler(e));
};
