import randomize from "../../utils/randomize";
import { Star } from "../../classes/Star";
import { CANVAS } from "../../canvas/Canvas";

export const NUMBER_OF_STARS = randomize(1, 50);

export function starDustInit(): Star[] {
    let arrayOfStars: Star[] = [];
    for (let i: number = 0; i < NUMBER_OF_STARS; i++) {
        const star = new Star(randomize(1, CANVAS.width), randomize(1, CANVAS.height));
        arrayOfStars[i] = (star);
    }
    return arrayOfStars;
}
