let str = "https://regex101.com/";
const reg = /https:\/\/\w+\.\w+/i;

function check() {
  return reg.test(str) ? true : false;
}

const res = check();
console.log(res);
