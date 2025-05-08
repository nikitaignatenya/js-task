let a = prompt();

isNaN(a)
  ? console.log(a.split("@").join(""))
  : console.log("Некорректный ввод");
