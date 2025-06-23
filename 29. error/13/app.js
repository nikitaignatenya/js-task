const str = "#ffffff";

const reg = /^(#[A-Z0-9]{3})|(#[A-Z0-9]{6})$/i;

function check() {
  return reg.test(str) ? true : false;
}
const res = check();
console.log(res);
