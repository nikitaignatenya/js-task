const str = "192.158.1.38";
const reg = /^[0-255]\.[0-255]\.[0-255]\.[0-255]$/;

function check() {
  console.log(reg.test(str) ? true : false);
}

check();
