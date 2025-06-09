let a = "hello world".split("");
console.log(a);

let res = "";
for (let el of a) {
  if (el !== "a") {
    res = false;
  } else {
    res = true;
    break;
  }
}

console.log(res);
