let string = prompt();

if (isNaN(string)) {
  console.log(string.split(""));
} else {
  if (string % 2 == 0) {
    console.log("Чётное");
  } else {
    console.log("нечётное");
  }
}
