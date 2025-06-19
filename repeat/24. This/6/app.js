const obj = {
  N: +prompt(),
  sumTon(sum) {
    for (let i = 0; i <= this.N; i++) {
      sum += i;
    }
    console.log(sum);
  },
};

obj.sumTon(0);
