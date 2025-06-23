const num = "+375(29)123-45-67";
const reg = /^\+\d{3}\(\d{2}\)\d{3}-\d{2}-\d{2}$/;

function check() {
  return reg.test(num) ? true : false;
}
const res = check();
console.log(res);
