import { eventTypes } from "./constants.js";

export default class HtmlHandler {
  constructor(eventSystem) {
    this.textDisplay = document.getElementById("text-display");
    this.textBuffer = [];

    eventSystem.on(eventTypes.DISPLAY_TEXT, this.displayText.bind(this));
  }

  displayText(text) {
    this.textDisplay.textContent = "";
    this.textBuffer.push(text);
    if (this.textBuffer.length >= 27) {
      this.textBuffer.shift();
    }
    for (const text of this.textBuffer) {
      this.textDisplay.textContent += `> ${text}\n`;
    }
  }
}
