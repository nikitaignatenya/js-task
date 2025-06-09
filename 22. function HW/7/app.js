const retStr = (name, count) => `${`${name} `.repeat(count).trim()}`,
  res = retStr(prompt(), +prompt());

console.log(res);
console.log(repeatName("Олег", 1));
