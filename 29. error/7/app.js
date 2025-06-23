let str = "@Aezakmi123";

const reg = /(?=.*[A-Za-z])(?=.*@)(?=.*\d).{8,}/;
function check() {
  return reg.test(str) ? true : false;
}

const res = check();
console.log(res);
