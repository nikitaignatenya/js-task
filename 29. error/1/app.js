const str = prompt();
const reg = /[0-9]+/;
function checkNum() {
  return reg.test(str) ? true : false;
}

const res = checkNum();
console.log(res);
