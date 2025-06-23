let str = prompt();
let reg = /[A-ZА-Я][a-zа-я]+ [A-ZА-Я][a-zа-я]+ [0-9]{1,3}/;

function check() {
  return reg.test(str) ? true : false;
}

const res = check();
console.log(res);
