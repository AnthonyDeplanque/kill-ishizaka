import { KeyboardInterface } from "./types/Keyboard"

export class Keyboard {
    private left: boolean = false
    private right: boolean = false
    private up: boolean = false
    private down: boolean = false
    private space: boolean = false
    private enter: boolean = false


    public getKey(): KeyboardInterface {
        return {
            left: this.left,
            right: this.right,
            up: this.up,
            down: this.down,
            space: this.space,
            enter: this.enter
        }
    }
    public setKeyPressed(e: KeyboardEvent): void {

        switch (e.code) {
            case "Enter": //enter
                this.enter = true;
                break;
            case "ArrowLeft": //left
                this.left = true;
                break;
            case "ArrowRight": //right
                this.right = true;
                break;
            case "ArrowUp": //up
                this.up = true;
                break;
            case "ArrowDown": //down
                this.down = true;
                break;
            case "Space": //space
                this.space = true;
                break;
        }
    }

    public setKeyUnPressed(e: KeyboardEvent): void {
        switch (e.code) {
            case "Enter": //enter
                this.enter = false;
                break;
            case "ArrowLeft": //left
                this.left = false;
                break;
            case "ArrowRight": //right
                this.right = false;
                break;
            case "ArrowUp": //up
                this.up = false;
                break;
            case "ArrowDown": //down
                this.down = false;
                break;
            case "Space": //space
                this.space = false;
                break;
        }
    }
}