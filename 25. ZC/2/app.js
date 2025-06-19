function greetUser(name) {
  return function () {
    console.log(`Привет ${name}`);
  };
}

const res = greetUser("Nikta");
res();
res();
res();
