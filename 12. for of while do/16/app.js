let a = prompt().split("");

let predIndex = 0;
let curIndex = 1;

while (curIndex < a.length) {
  console.log(predIndex, curIndex, a.join(""), a[predIndex], a[curIndex]);
  if (+a[predIndex] % 2 !== 0 && +a[curIndex] % 2 !== 0) {
    a.splice(curIndex, 0, ":");
    predIndex = curIndex + 1;
    curIndex = predIndex + 1;
  } else {
    curIndex++;
    predIndex++;
  }
  console.log(predIndex, curIndex, a.join(""));
}

a = a.join("");
console.log(a);
