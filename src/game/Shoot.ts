import { Explosion } from "../classes/Explosion";
import { EnemyShip } from "../classes/Ships/EnemyShip";
import { Laser } from "../classes/Shots/Laser";
import { Coordinates } from "../classes/types/Coordinates";
import { ObjectsPositionAndSize } from "../classes/types/ObjectsCoordinatesAndSizes";
import { hero, lasers, enemyBuilder, explosions, DEBUG } from "../index";
import { isColliding } from "../utils/isColliding";
import { DELAY_BETWEEN_TWO_SHOTS } from "../variables/DelayBetweenTwoShots";
import ENEMY_IMAGE from "../variables/enemies/EnemyImage";
import { ENEMY_SWARM } from "../variables/enemies/enemySwarmInit";
import { MAX_SIMULTANEOUS_SHOTS } from "../variables/MaxSimultaneousShots";


let firingToggle: boolean = false;
export const shoot = (toggle: boolean) => {


  const heroPosition: Coordinates = hero.getPosition();
  const heroSize: Coordinates = hero.getSize();


  if (toggle) {
    if (firingToggle === false) {
      if (lasers.length < (DEBUG ? 1 : MAX_SIMULTANEOUS_SHOTS)) {

        firingToggle = true;
        const laser = new Laser(heroPosition.x + (heroSize.x / 2) - (Laser.LASER_SIZE_X / 2), heroPosition.y);
        lasers.push(laser);


        // DEBUG && ENEMY_SWARM.forEach((enemy: EnemyShip) => {
        //   const enemyPosition = enemy.getPosition();
        //   const enemySize = enemy.getSize();
        //   console.log(`Enemy=> x:${enemyPosition.x}-${enemySize.x + enemyPosition.x}`);
        // });

        //DEBUG && console.log(`Laser=> x:${heroPosition.x + (heroSize.x / 2) - (Laser.LASER_SIZE_X / 2)}-${(heroPosition.x + (heroSize.x / 2) - (Laser.LASER_SIZE_X / 2)) + Laser.LASER_SIZE_X}`);
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
      //DEBUG && console.log(`laser x:${laserPosition.x}/${laserPosition.x + laserSize.x} - y:${laserPosition.y}/${laserPosition.y + laserSize.y}`)
      ENEMY_SWARM.forEach((enemy: EnemyShip, indexEnemy: number) => {
        const enemyPosition = enemy.getPosition();
        const enemySize = enemy.getSize();
        //DEBUG && console.log(`enemy x:${enemyPosition.x}/${enemyPosition.x + enemySize.x} - y:${enemyPosition.y}/${enemyPosition.y + enemySize.y}`)
        const collisionDetector: ObjectsPositionAndSize = {
          objectA: { position: enemyPosition, size: enemySize },
          objectB: { position: laserPosition, size: laserSize }
        }
        if (isColliding(collisionDetector)) {

          const enemyBuilderPosition = enemyBuilder.getPosition()

          const explosion = new Explosion(enemyPosition.x, enemyPosition.y);
          explosions.push(explosion);


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