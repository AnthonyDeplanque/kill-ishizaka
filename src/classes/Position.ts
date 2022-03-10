export class Position {
    private x: number // the position on x axis
    private x_direction: 1 | -1 // direction is 1 or -1 to set direction to left or right
    constructor(limit) {
        this.x = limit;
        this.x_direction = 1;
    }
    protected draw() { };
    protected update() { };
    public run() { };
}
