function da(start) {
  return function (step) {
    return function (len) {
      for (let i = start; i <= len * step; i += step) {
        console.log(i);
      }
    };
  };
}
da(+prompt("start"))(+prompt("step"))(+prompt("len"));
