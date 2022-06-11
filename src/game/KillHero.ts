import { hero } from "..";
import { Explosion } from "../classes/Explosion";
import { Coordinates } from "../classes/types/Coordinates";

/**
 * This function set an explosion to the coordinates of the hero and set it 'dead' (alive=false)
 * @returns
 */
export const killHero = (): Explosion => {
  const explosionPosition: Coordinates = hero.getPosition();
  const explosion: Explosion = new Explosion(
    explosionPosition.x,
    explosionPosition.y
  );
  hero.setAlive(false);
  return explosion;
};
