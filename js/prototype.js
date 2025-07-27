class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return "woof!!";
  }
}
Dog.prototype.play = function () {
  return `${this.name} is playing`;
};

const dog1 = new Dog("Daisy");
console.log(dog1.play());
