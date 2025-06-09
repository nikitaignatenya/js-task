let obj1 = {
  id: 1,
  name_: "nikita",
};

let obj2 = {
  id: 2,
  pass: 123,
};

let obj3 = {};

for (let key in obj1) {
  if (obj2.hasOwnProperty(key)) {
    obj3[key] = obj2[key];
  }
}

console.log(obj3);
