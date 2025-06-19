const obj = {
  M: +prompt(),
  countEvens(sum) {
    for (let i = 1; i <= this.M; i++) {
      i % 2 == 0 ? (sum += 1) : sum;
    }
    return console.log(sum);
  },
};

obj.countEvens(0);
