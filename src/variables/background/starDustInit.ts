import randomize from "../../utils/randomize";
import { Star } from "../../classes/Star";
import { CANVAS } from "../../canvas/Canvas";

export const MAX_NUMBER_OF_STARS: number = 250;
export const NUMBER_OF_STARS = randomize(
  MAX_NUMBER_OF_STARS - 50,
  MAX_NUMBER_OF_STARS
);

function starDustInit(): Star[] {
  let arrayOfStars: Star[] = [];
  for (let i: number = 0; i < NUMBER_OF_STARS; i++) {
    const star = new Star(
      randomize(1, CANVAS.width),
      randomize(1, CANVAS.height)
    );
    arrayOfStars[i] = star;
  }
  return arrayOfStars;
}

export const STARDUST = starDustInit();
