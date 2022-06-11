import { hero } from ".."
import { Explosion } from "../classes/Explosion"
import { Coordinates } from "../classes/types/Coordinates";

export const killHero = (): Explosion => {
  const explosionPosition: Coordinates = hero.getPosition()
  const explosion: Explosion = new Explosion(explosionPosition.x, explosionPosition.y);
  hero.setAlive(false);
  return explosion;
}