const isValidName = (name) => (name ? true : false);
const sayHello = (name) => {
  return first == true ? `Привет, ${name}!` : "Некорректное имя";
};

const prName = prompt();
const first = isValidName(prName);
const res = sayHello(prName);
console.log(res);
