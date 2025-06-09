let a = "h e l l o";
let b = "";

for (let i = 0; i < a.length; i++) {
  if (a[i] == " ") {
    continue;
  } else {
    b += `${a[i]}`;
  }
}
console.log(b);
