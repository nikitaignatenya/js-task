((str, arr, arrRes) => {
  str.split("").forEach((el, i) => {
    i !== str.split("").indexOf(el) ? arr.push(el) : null;
  });
  str.split("").forEach((el) => {
    !arr.includes(el) ? arrRes.push(el) : null;
  });
  console.log(arrRes);
})("programming", [], []);
