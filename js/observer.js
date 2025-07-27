class Observable {
  constructor() {
    this.observers = [];
  }
  subscribe(func) {
    this.observers.push(func);
  }
  unsubscribe(func) {
    this.observers = this.observers.filter((obv) => obv !== func);
  }
  notify(data) {
    this.observers.forEach((obv) => obv(data));
  }
}

const emitter = new Observable();
const subscribe = emitter.subscribe(console.log);

emitter.notify("Event occured");
