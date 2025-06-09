let object = { a: 1, b: null, c: 3, d: null };

for (const key in object) {
  if (object[key] == null) {
    delete object[key];
  }
}

console.log(object);
