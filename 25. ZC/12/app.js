function hasLength(n) {
  return function (str) {
    return str.length == n ? true : false;
  };
}
const res = hasLength(5)(prompt());
console.log(res);
