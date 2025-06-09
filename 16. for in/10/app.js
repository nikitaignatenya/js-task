let obj = {};
obj.name = "";
obj.age = "";
obj.birthday = "";

for (let key in obj) {
  if (key === "name") {
    obj[key] = String(prompt());
  }

  if (key === "age") {
    obj[key] = Number(prompt("Число"));
  }
  if (key === "birthday") {
    obj[key] = String(prompt());
  }
}

console.log(obj);
