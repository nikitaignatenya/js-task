let num = prompt();

!isNaN(num)
  ? console.log("Тип " + typeof +num)
  : num == "true" || num == "false"
  ? console.log("Тип " + typeof !!num)
  : console.log("Тип " + String(typeof num));
