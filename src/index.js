import Enemy from "./enemy.js";
import EventSystem from "./eventSystem.js";
import HtmlHandler from "./htmlHandler.js";
import KeyHandler from "./keyPressHandler.js";
import MessageHandler from "./messageHandler.js";
import Player from "./player.js";
import World from "./world.js";

window.onload = initGame;

function initGame() {
  const eventSystem = new EventSystem();
  const htmlHandler = new HtmlHandler(eventSystem);
  const keyHandler = new KeyHandler(eventSystem);
  const player = new Player(eventSystem);
  const world = new World(eventSystem);
  const messageHandler = new MessageHandler(eventSystem);

  function runGame(timeStamp) {
    Enemy.spawnEnemy(timeStamp, eventSystem);
    requestAnimationFrame(runGame);
  }

  requestAnimationFrame(runGame);
}
