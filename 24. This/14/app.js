function introduce(old, city) {
  console.log(`${this.name} - ${old} лет, живёт в ${city}`);
}

const obj = {
  name: "Nikita",
};

introduce.apply(obj, [18, "Minsk"]);
