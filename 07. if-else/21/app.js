let num = prompt();

num = Number(num);
Number.isInteger(num) && num > 0 && !isNaN(num)
  ? console.log("true")
  : console.log("false");
