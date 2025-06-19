((str, arr, num) => {
  arr.forEach((el) => {
    str.includes(el) ? (num += 1) : num;
  });
  console.log(num);
})(
  prompt(),
  [
    "б",
    "в",
    "г",
    "д",
    "ж",
    "з",
    "й",
    "к",
    "л",
    "м",
    "н",
    "п",
    "р",
    "с",
    "т",
    "ф",
    "х",
    "ц",
    "ч",
    "ш",
    "щ",
  ],
  0
);
