let a = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

for (let i = 0; i < a.length; i++) {
  switch (a[i]) {
    case "Monday":
      console.log(`${a[i]} будний день`);
      break;
    case "Tuesday":
      console.log(`${a[i]} будний день`);
      break;
    case "Wednesday":
      console.log(`${a[i]} будний день`);
      break;
    case "Thursday":
      console.log(`${a[i]} будний день`);
      break;
    case "Friday":
      console.log(`${a[i]} будний день`);
      break;
    case "Saturday":
      console.log(`${a[i]} выходной день`);
      break;
    case "Sunday":
      console.log(`${a[i]} выходной день`);
      break;

    default:
      console.log("Неверный ввод");
      break;
  }
}
