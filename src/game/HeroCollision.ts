import { explosions, hero } from ".."
import { Explosion } from "../classes/Explosion"
import { EnemyShip } from "../classes/Ships/EnemyShip"
import { HeroShip } from "../classes/Ships/HeroShip"
import { PositionAndSize } from "../classes/types/ObjectsCoordinatesAndSizes"
import { isColliding } from "../utils/isColliding"
import { DELAY_TO_RESPAWN } from "../variables/DelayToRespawn"
import { killHero } from "./KillHero"

export const heroCollision = (enemy: EnemyShip) => {
  const heroPositionAndSize: PositionAndSize = {
    position: hero.getPosition(),
    size: hero.getSize()
  }

  const enemyPositionAndSize: PositionAndSize = {
    position: enemy.getPosition(),
    size: enemy.getSize()
  }
  if (hero.isAlive()) {
    if (isColliding(heroPositionAndSize, enemyPositionAndSize)) {
      const explosion: Explosion = killHero();
      explosions.push(explosion);
      setTimeout(() => {
        hero.setAlive(true);
        hero.setPosition({
          x: HeroShip.INIT_X,
          y: HeroShip.INIT_Y
        });
      }, DELAY_TO_RESPAWN);
    }
  }
}