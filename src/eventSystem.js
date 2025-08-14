export default class EventSystem {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    this.listeners[event] ??= [];
    this.listeners[event].push(callback);
  }

  emit(event, data) {
    for (const callback of this.listeners[event] ?? []) {
      callback(data);
    }
  }
}
