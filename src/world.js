import { eventTypes } from "./constants.js";

export default class World {
  constructor(eventSystem) {
    this.eventSystem = eventSystem;
    this.activeEnemies = [];
    this.inactiveEnimies = [];

    this.eventSystem.on(
      eventTypes.SPAWN_ENEMY,
      this.pushActiveEnemy.bind(this)
    );
  }

  pushActiveEnemy(enemy) {
    console.log("Creating an enemy in world.");
    console.log(this.activeEnemies);
    this.activeEnemies.push(enemy);
  }
}
