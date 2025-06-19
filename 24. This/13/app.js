function sayHello() {
  console.log(`Привет, ${this.name}!`);
}
const obj = {
  name: prompt(),
};

sayHello.call(obj);
