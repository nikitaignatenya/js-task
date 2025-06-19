function greaterThanX(x) {
  return function (n) {
    return n > x ? true : false;
  };
}
const res = greaterThanX(+prompt())(+prompt());
console.log(res);
