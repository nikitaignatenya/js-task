const data = "2025-06-20";

const reg = /^[1-2][0-9][0-9][0-9]-\d{2}-\d{2}$/;

function check() {
  console.log(reg.test(data) ? true : false);
}

check();
