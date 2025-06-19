function sayHi() {
  console.log(`Привет, ${this.name}.`);
}
const obj = {
  name: "Nikitos",
};

const sayHiFromUser = sayHi.bind(obj);
sayHiFromUser();
