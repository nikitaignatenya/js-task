let num = +prompt("Отметка");

if (!isNaN(num)) {
  switch (num) {
    case 1:
      console.log("Очень плохо");
      break;
    case 2:
      console.log("Плохо");
      break;
    case 3:
      console.log("Удовлетворительно");
      break;
    case 4:
      console.log("Хорошо");
      break;
    case 5:
      console.log("Олично");
      break;
    default:
      console.log("Не число");
      break;
  }
} else {
  console.log("не число ");
}
