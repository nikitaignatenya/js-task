function toPow(n1) {
  return function (n3) {
    for (let i = n1; i <= n3; i++) {
      console.log(i ** 2);
    }
  };
}

toPow(3)(5);
