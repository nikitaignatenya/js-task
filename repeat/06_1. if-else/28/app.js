let a = prompt();

typeof a !== Number
  ? console.log(`Тип ${typeof a}`)
  : a == "true" && a == "false"
  ? console.log(`Тип ${typeof Boolean(a)}`)
  : console.log(`Тип ${typeof +a}`);
