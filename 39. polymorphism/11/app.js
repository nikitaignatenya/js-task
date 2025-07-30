class A {
  animal;
  constructor(animal) {
    this.animal = animal;
    console.log(this.animal);
  }
}

class B extends A {
  constructor(animal, bird) {
    super(animal);
    console.log(animal);
    console.log(this.animal);
  }
}

const a = new A("Медведь");
const b = new B("Тигр", "Ворона");

console.log(a.animal);
console.log(b.animal);
