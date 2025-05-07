let a = prompt();

if (!isNaN(a)) {
  switch (a) {
    case "1":
      console.log("Очень плохо");
      break;
    case "1":
      console.log("плохо");
      break;
    case "1":
      console.log("Удолетворительно");
      break;
    case "1":
      console.log("Хорошо");
      break;
    case "1":
      console.log("Отлично");
      break;
    default:
      console.log("Некорректный ввод");
  }
} else {
  console.log("Не число");
}
