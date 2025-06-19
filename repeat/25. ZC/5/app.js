function greetUser(name) {
  return function () {
    return console.log(`Hello ${name}`);
  };
}
const res = greetUser(prompt("Имя"));
res();
