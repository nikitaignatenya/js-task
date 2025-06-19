function user(name) {
  return function (age) {
    return function (city) {
      return console.log(name, age, city);
    };
  };
}

user(prompt())(prompt())(prompt());
