let object = { name: "Bob", age: 30, status: "active" };
for (const key in object) {
  if (typeof object[key] == "string") {
    console.log(object[key]);
  }
}
