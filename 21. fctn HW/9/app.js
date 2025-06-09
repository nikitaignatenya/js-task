function greeting(hour) {
  if (hour >= 0 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 18) return "Good aftrenoon";
  if (hour >= 18 && hour <= 23) return "Good evening";
}

const res = greeting(+prompt());

console.log(res);
