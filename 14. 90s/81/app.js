let a = "Hello World hi there".split(" ");

let i = 0;

let b = 0;

while (i < a.length) {
  if (a[i][0] == a[i][0].toUpperCase()) {
    b += 1;
  } else {
    b += 0;
  }
  i++;
}

console.log(b);
