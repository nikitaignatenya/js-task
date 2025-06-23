const str = prompt();

const reg = /^[A-Z].*$/;

function check() {
  console.log(reg.test(str) ? true : false);
}

check();
