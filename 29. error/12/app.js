const str = "123";
const reg = /^\d{3}$/;

function check() {
  return reg.test(str) ? true : false;
}

const res = check();
console.log(res);
