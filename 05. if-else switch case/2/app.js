let num = +prompt("Число дня недели");

if (num == 1 && num < 7) {
  console.log("Понедельник");
} else if (num == 2 && num < 7) {
  console.log("Вторник");
} else if (num == 3 && num < 7) {
  console.log("Среда");
} else if (num == 4 && num < 7) {
  console.log("Четверг");
} else if (num == 5 && num < 7) {
  console.log("Пятница");
} else if (num == 6 && num < 7) {
  console.log("Суббота");
} else if (num > 1 && num == 7) {
  console.log("Воскресенье");
} else {
  console.log("не то");
}

let num1 = +prompt("Число дня недели");

switch (num1) {
  case "1":
    console.log("Понедельник");
    break;
  case "1":
    console.log("Вторник");
    break;
  case "1":
    console.log("Среда");
    break;
  case "1":
    console.log("Четверг");
    break;
  case "1":
    console.log("Пятница");
    break;
  case "1":
    console.log("Суббота");
    break;
  case "1":
    console.log("Воскресеьне");
    break;
  default:
    console.log("не то");
    break;
}
