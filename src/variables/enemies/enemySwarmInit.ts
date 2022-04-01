
import { CANVAS } from "../../canvas/Canvas";
import { EnemyShip } from "../../classes/Ships/EnemyShip";
import randomize from "../../utils/randomize";
import { LIMIT_FOR_CANVAS } from "../Limit";
import ENEMY_IMAGE from "./EnemyImage";

export const MAX_NUMBER_OF_ENEMIES: number = 10;

const enemySwarmInit = (): EnemyShip[] => {
  let arrayOfEnemies: EnemyShip[] = [];
  for (let i: number = 0; i < MAX_NUMBER_OF_ENEMIES; i++) {
    const enemy = new EnemyShip(randomize(LIMIT_FOR_CANVAS, CANVAS.width - LIMIT_FOR_CANVAS), 100, ENEMY_IMAGE)
    arrayOfEnemies[i] = enemy;
  }
  return arrayOfEnemies;
}

export const ENEMY_SWARM = enemySwarmInit();
