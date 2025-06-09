(function (obj) {
  obj.age > 17
    ? console.log("совершеннолетний")
    : console.log("Несовершеннолетний");
})({ name: "Лена", age: 17 });
