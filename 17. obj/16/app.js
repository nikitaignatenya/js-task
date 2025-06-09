let object = { name: "Anna", status: "online" };
let a = [];
for (const key in object) {
  a.push(key);
}

const res = a.some(function (el) {
  if (el == "status") {
    return true;
  } else return false;
});

console.log(res);
