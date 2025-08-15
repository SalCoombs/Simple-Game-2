import { keyBinds, eventTypes } from "./constants.js";

export default class Player {
  constructor(eventSystem) {
    this.eventSystem = eventSystem;
    this.items = {
      weapons: [],
    };
    this.keyMap = Object.freeze({
      [keyBinds.J]: this.attack.bind(this),
      [keyBinds.K]: this.defend.bind(this),
    });

    this.eventSystem.on(eventTypes.KEY_PRESSED, this.handeInput.bind(this));
  }

  handeInput(input) {
    this.keyMap[input]?.();
  }

  attack() {
    this.eventSystem.emit(eventTypes.PLAYER_ATTACK, this.damage);
    //console.log(`Attack, with ${this.damage} damage!`);
  }

  defend() {
    //console.log("Defend!");
  }
}
