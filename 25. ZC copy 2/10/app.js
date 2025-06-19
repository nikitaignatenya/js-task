function res(n) {
  return function () {
    console.log((n += 1));
  };
}
const result = res(0);

result();
result();
result();
result();
result();
