let a = prompt();

!isNaN(a)
  ? console.log("Ошибка")
  : console.log(a[0].toUpperCase().trim() + a.slice(1).trim());
