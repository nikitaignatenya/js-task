let str = "C:Users\\Admin\\Desktop\\test.txt";
let reg = /^\w:\w+\\\w+\\\w+\\\w+\.\w+$/i;
function check() {
  return reg.test(str) ? true : false;
}

const res = check();
console.log(res);
