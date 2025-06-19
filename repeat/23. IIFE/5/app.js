((arr) => {
  const res = arr.filter((el) => {
    return el.length == 3 || el.length == 4 ? true : false;
  });
  console.log(res.length);
})(["cat", "lion", "dog", "elephant", "bat", "fox", "wolf", "bee"]);
