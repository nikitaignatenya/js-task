let v1 = prompt("Скорость 1");
let v2 = prompt("Скорость 2");
let s = prompt("Расстояние");

!isNaN(v1) && !isNaN(v2) && !isNaN(s)
  ? console.log(+s / (+v1 + +v2))
  : console.log("Не число");
