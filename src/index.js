import Enemy from "./enemy.js";
import EventSystem from "./eventSystem.js";
import HtmlHandler from "./htmlHandler.js";
import KeyHandler from "./keyPressHandler.js";
import Player from "./player.js";

window.onload = initGame;

function initGame() {
  const eventSystem = new EventSystem();
  const htmlHandler = new HtmlHandler(eventSystem);
  const keyHandler = new KeyHandler(eventSystem);
  const player = new Player(eventSystem);
  const enemy = new Enemy(eventSystem);

  requestAnimationFrame(runGame);
}

function runGame() {
  requestAnimationFrame(runGame);
}
