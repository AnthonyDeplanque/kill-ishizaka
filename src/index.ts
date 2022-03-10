import clearCanvas from "./canvas/clearCanvas";
export { } // to prevent duplicate function implementation;

function gameLoop() {
    window.requestAnimationFrame(gameLoop);
    clearCanvas();
}

window.onload = (): void => {

}