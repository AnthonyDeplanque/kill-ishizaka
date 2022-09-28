import { Explosion } from "../classes/Explosion";
import { EnemyShip } from "../classes/Ships/EnemyShip";
import { Laser } from "../classes/Shots/Laser";
import { Coordinates } from "../classes/types/Coordinates";
import { PositionAndSize } from "../classes/types/ObjectsCoordinatesAndSizes";
import { hero, lasers, enemyBuilder, explosions } from "../index";
import { isColliding } from "../utils/isColliding";
import { DEBUG } from "../variables/DEBUG";
import { DELAY_BETWEEN_TWO_SHOTS } from "../variables/DelayBetweenTwoShots";
import ENEMY_IMAGE from "../variables/enemies/EnemyImage";
import { ENEMY_SWARM } from "../variables/enemies/enemySwarmInit";
import { MAX_SIMULTANEOUS_SHOTS } from "../variables/MaxSimultaneousShots";

let firingToggle: boolean = false;

/**
 * this function checks if we are firing, creates shots to display,
 * checks if a shoot is colliding to an enemy or not , delete it
 * and create an explosion if they are colliding
 *
 * @param toggle boolean to detect if we are firing or not
 */
export const shoot = (toggle: boolean, score: number): number => {
    const heroPosition: Coordinates = hero.getPosition();
    const heroSize: Coordinates = hero.getSize();
    if (hero.isAlive()) {
        if (toggle) {
            if (firingToggle === false) {
                if (lasers.length < MAX_SIMULTANEOUS_SHOTS) {
                    firingToggle = true;
                    const laser = new Laser(
                        heroPosition.x + heroSize.x / 2 - Laser.LASER_SIZE_X / 2,
                        heroPosition.y - Laser.LASER_SIZE_Y
                    );
                    lasers.push(laser);

                    // DEBUG && ENEMY_SWARM.forEach((enemy: EnemyShip) => {
                    //   const enemyPosition = enemy.getPosition();
                    //   const enemySize = enemy.getSize();
                    //   console.log(`Enemy=> x:${enemyPosition.x}-${enemySize.x + enemyPosition.x}`);
                    // });

                    setTimeout((): void => {
                        firingToggle = false;
                    }, DELAY_BETWEEN_TWO_SHOTS);
                }
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

            DEBUG &&
                console.log(
                    `laser x:${laserPosition.x}/${laserPosition.x + laserSize.x} - y:${laserPosition.y}/${
                        laserPosition.y + laserSize.y
                    }`
                );

            ENEMY_SWARM.forEach((enemy: EnemyShip, indexEnemy: number) => {
                const enemyPosition = enemy.getPosition();
                const enemySize = enemy.getSize();

                DEBUG &&
                    console.log(
                        `enemy x:${enemyPosition.x}/${enemyPosition.x + enemySize.x} - y:${enemyPosition.y}/${
                            enemyPosition.y + enemySize.y
                        }`
                    );

                const enemyColliding: PositionAndSize = {
                    position: enemyPosition,
                    size: enemySize,
                };
                const laserColliding: PositionAndSize = {
                    position: laserPosition,
                    size: laserSize,
                };

                if (isColliding(enemyColliding, laserColliding)) {
                    const enemyBuilderPosition = enemyBuilder.getPosition();

                    const explosion = new Explosion(enemyPosition.x, enemyPosition.y);
                    explosions.push(explosion);
                    score++;
                    // console.log(score);

                    ENEMY_SWARM.splice(indexEnemy, 1);
                    lasers.splice(indexLaser, 1);
                    const newEnemy = new EnemyShip(enemyBuilderPosition, 0, ENEMY_IMAGE);
                    ENEMY_SWARM.push(newEnemy);
                }
            });
            laser.run();
        });
    }
    return score;
};
