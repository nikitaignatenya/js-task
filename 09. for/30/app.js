let a = [5, "hello", 15, "world", 25, 3, "test"];

for (let i = 0; i < 100; i++) {
  if (isNaN(a[i])) {
    continue;
  }
  if (+a[i] < 10) {
    console.log("маленькое число");
  }
  if (+a[i] >= 10 && a <= 20) {
    console.log("Среднее число");
  }
  if (+a[i] > 20) {
    console.log("большое число");
  }
  console.log(a[i]);
}
