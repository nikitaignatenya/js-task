for (let i = 0; i < 100; i++) {
  if (i % 4 == 0 && i % 8 !== 0) {
    continue;
  }
  if (i % 5 == 0 && i % 10 == 0 && i != 0) {
    break;
  }
  console.log(i);
}
