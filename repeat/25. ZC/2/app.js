function greaterThanX(x) {
  return function () {
    return +prompt("Число Y") > x ? true : false;
  };
}

const res2 = greaterThanX(+prompt("Число X"));
res2() == true ? console.log("Y") : console.log("X");
