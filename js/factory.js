class Car {
  constructor() {
    this.type = "car";
  }
}

class Truck {
  constructor() {
    this.type = "truck";
  }
}

class VehicleFactory {
  static createVehicle(type) {
    if (type === "car") {
      return new Car();
    } else if (type === "truck") {
      return new Truck();
    } else {
      throw new Error(`We don't make ${type} type Vehicle.`);
    }
  }
}

const car = VehicleFactory.createVehicle("car");
const truck = VehicleFactory.createVehicle("truck");
// const limo = VehicleFactory.createVehicle("Limo");

console.log(car);
console.log(truck);
