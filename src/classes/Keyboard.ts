export class Keyboard {
    private left: boolean = false
    private right: boolean = false
    private up: boolean = false
    private down: boolean = false
    private space: boolean = false
    private enter: boolean = false

    public setKeyPressed(e: KeyboardEvent): void {
        switch (e.code) {
            case "13": //enter
                this.enter = true;
                break;
            case "37": //left
                this.left = true;
                break;
            case "39": //right
                this.right = true;
                break;
            case "38": //up
                this.up = true;
                break;
            case "40": //down
                this.down = true;
                break;
            case "32": //space
                this.space = true;
                break;
        }
    }

    public setKeyUnPressed(e: KeyboardEvent): void {
        switch (e.code) {
            case "13": //enter
                this.enter = false;
                break;
            case "37": //left
                this.left = false;
                break;
            case "39": //right
                this.right = false;
                break;
            case "38": //up
                this.up = false;
                break;
            case "40": //down
                this.down = false;
                break;
            case "32": //space
                this.space = false;
                break;
        }
    }
}