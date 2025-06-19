((arr) => {
  const res = arr.filter((el) => {
    const toStr = String(el).split("").reverse().join("");
    return toStr === String(el);
  });
  return console.log(res);
})([121, 202, 345, 11, 99]);
