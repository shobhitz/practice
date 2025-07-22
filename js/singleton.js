let counter = 0;
let instance;

class Counter {
  constructor() {
    if (instance) {
      return instance;
      // throw new error("Already Created");
    }
    instance = this;
  }
  getInstance() {
    return this;
  }
  getCount() {
    return counter;
  }
  increment() {
    return ++counter;
  }
  decrement() {
    return --counter;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();
counter1.increment();
console.log(counter2.getCount());
console.log(counter1 === counter2);
