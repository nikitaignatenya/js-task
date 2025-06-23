let str = prompt();
const reg = / /;

function check() {
  return str.replaceAll(reg, "");
}

const res = check();
console.log(res);
