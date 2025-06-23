let str = "nikita_123@gmail.com";
const reg = /^\w+_+\w+@[A-Za-z]+\.[A-Za-z]+$/i;
function check() {
  return reg.test(str) ? true : false;
}

const res = check();
console.log(res);
