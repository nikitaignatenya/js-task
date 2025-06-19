const obj = {
  M: +prompt(),
  countEnents(arr) {
    for (let i = 1; i <= this.M; i++) {
      arr.push(i);
    }
    const res = arr.filter((el) => (el % 2 == 0 ? true : false));
    console.log(res.length);
  },
};

obj.countEnents([]);
