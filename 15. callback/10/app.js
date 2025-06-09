let a = +prompt("Количество значений");
let arr = [];
const js = "javascript";

for (let i = 0; i < a; i++) {
  arr.push(prompt("Значение"));
  if (!isNaN(arr[i])) {
    console.log("число");
    break;
  }
}

let b = [];

arr.forEach(function (el) {
  if (el.includes("javascript")) {
    b.push(el);
  }
});

console.log(b);
