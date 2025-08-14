import EventSystem from "./eventSystem.js";
import HtmlHandler from "./htmlHandler.js";

window.onload = initGame;

function initGame() {
  const eventSystem = new EventSystem();
  const htmlHandler = new HtmlHandler(eventSystem);
}
