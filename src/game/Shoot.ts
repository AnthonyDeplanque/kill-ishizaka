import { EnemyBuilder } from "../classes/EnemyBuilder";
import { EnemyShip } from "../classes/Ships/EnemyShip";
import { Laser } from "../classes/Shots/Laser";
import { Coordinates } from "../classes/types/Coordinates";
import { ObjectsPositionAndSize } from "../classes/types/ObjectsCoordinatesAndSizes";
import { keyboard, hero, lasers, enemyBuilder } from "../index";
import { isColliding } from "../utils/isColliding";
import { DELAY_BETWEEN_TWO_SHOTS } from "../variables/DelayBetweenTwoShots";
import ENEMY_IMAGE from "../variables/enemies/EnemyImage";
import { ENEMY_SWARM } from "../variables/enemies/enemySwarmInit";
import { MAX_SIMULTANEOUS_SHOTS } from "../variables/MaxSimultaneousShots";


let firingToggle: boolean = false;
export const shoot = () => {

  const key = keyboard.getKey();
  const heroPosition: Coordinates = hero.getPosition();
  const heroSize: Coordinates = hero.getSize();


  if (key.space) {
    if (firingToggle === false) {
      if (lasers.length < MAX_SIMULTANEOUS_SHOTS) {

        firingToggle = true;
        const laser = new Laser(heroPosition.x + (heroSize.x / 2) - (Laser.LASER_SIZE_X / 2), heroPosition.y);
        lasers.push(laser);

        setTimeout((): void => { firingToggle = false }, DELAY_BETWEEN_TWO_SHOTS)

      }
    }
  }

  if (lasers.length && lasers.length > 0) {
    lasers.forEach((laser: Laser, indexLaser: number) => {
      const laserPosition = laser.getPosition();
      const laserSize = laser.getSize();
      if (laserPosition.y < 0) {
        lasers.splice(indexLaser, 1);
      }
      ENEMY_SWARM.forEach((enemy: EnemyShip, indexEnemy: number) => {
        const enemyPosition = enemy.getPosition();
        const enemySize = enemy.getSize();

        const collisionDetector: ObjectsPositionAndSize = {
          objectA: { position: enemyPosition, size: enemySize },
          objectB: { position: laserPosition, size: laserSize }
        }
        if (isColliding(collisionDetector)) {
          const enemyBuilderPosition = enemyBuilder.getPosition()
          ENEMY_SWARM.splice(indexEnemy, 1);
          lasers.splice(indexLaser, 1);
          const newEnemy = new EnemyShip(enemyBuilderPosition, 0, ENEMY_IMAGE);
          ENEMY_SWARM.push(newEnemy);
        }
      })
      laser.run();
    })
  }

}