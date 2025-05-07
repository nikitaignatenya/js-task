let a = [1, "hi", 2, "hello", 3];

for (let i = 0; i < a.length; i++) {
  isNaN(a[i]) ? console.log("Строка " + a[i]) : console.log("Число " + a[i]);
}
