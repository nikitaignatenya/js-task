let a = "5,10,15";

a = a.split(",");

const res = a.map(function (el) {
  return (el = Number(el));
});

console.log(Math.max(...res));
