let string = prompt();

isNaN(string)
  ? console.log("#" + string.toLowerCase().trim())
  : console.log("Не число");
