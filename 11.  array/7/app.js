let a = ["да", "нет", "да", "может быть"];

for (let i = 0; i < a.length; i++) {
  if (a[a.length - i] !== "да") {
    continue;
  } else {
    console.log(a.lastIndexOf(a[i]));
  }
}
