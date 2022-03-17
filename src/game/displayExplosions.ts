import { Explosion } from "../classes/Explosion"

export const displayExplosions = (explosions: Explosion[]) => {
    if (explosions.length && explosions.length > 0) {
        explosions.forEach((explosion: Explosion, index: number) => {
            const exist = explosion.getExistence()
            if (!exist) {
                explosions.splice(index, 1);
            }
            explosion.run();
        })
    }
}