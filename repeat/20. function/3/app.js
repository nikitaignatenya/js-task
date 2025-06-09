function DoFirstIndexToUpperCase(array) {
  for (let i = 0; i < 5; i++) {
    array.push(prompt());
  }
  const res = array.map(function (el) {
    return `${el[0].toUpperCase()}${el.slice(1, el.length)}`;
  });
  console.log(res);
}

DoFirstIndexToUpperCase([]);
