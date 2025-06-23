const str = "I love #JavaScript and #regex!";

const reg = /#[A-Za-z]+/g;

function check() {
  return str.replaceAll(reg, "");
}

const res = check();
console.log(res);
