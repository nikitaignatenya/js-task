function greet(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
}

greet("Hello")("Nikita");
