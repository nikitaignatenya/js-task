let str = prompt();
const reg = /[^A-Za-z]+/g;
function check() {
  const rep = str.replaceAll(reg, "");
  if (rep.length == str.length) {
    return true;
  } else {
    return false;
  }
}

const res = check();
console.log(res);
