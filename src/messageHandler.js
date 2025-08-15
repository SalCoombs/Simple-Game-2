import { eventTypes } from "./constants.js";

export default class MessageHandler {
  constructor(eventSystem) {
    this.eventSystem = eventSystem;

    this.eventSystem.on(
      eventTypes.SPAWN_ENEMY,
      this.spawnEnemyMessage.bind(this)
    );
  }

  spawnEnemyMessage(enemy) {
    console.log("Spawing an enemy");
    const message = "Spawned a spirit.";
    this.eventSystem.emit(eventTypes.DISPLAY_TEXT, message);
  }
}
