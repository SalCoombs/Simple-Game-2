import { eventTypes, enemyTypes } from "./constants.js";

export default class Enemy {
  constructor(eventSystem, type) {
    this.eventSystem = eventSystem;
    this.type = type;
    this.life = 1;
    this.attack = 1;

    this.#initEnemy();

    this.eventSystem.on(eventTypes.PLAYER_ATTACK, this.loseLife.bind(this));
  }

  loseLife(damage) {
    this.life -= damage;
    console.log(`Lost ${damage} life...`);
  }

  #initEnemy() {
    switch (this.type) {
      case enemyTypes.WATER:
        this.life = 3;
        this.attack = 1;
        break;
      case enemyTypes.EARTH:
        this.life = 7;
        this.attack = 3;
        break;
      case enemyTypes.FIRE:
        this.life = 12;
        this.attack = 5;

      default:
        this.life = 1;
        this.attack = 1;
        break;
    }
  }
}
