const pin = prompt();

const reg = /([0-9]{4})|([0-9]{6})/;

function check() {
  return reg.test(pin) ? true : false;
}

const res = check();
console.log(res);
