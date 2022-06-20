function isBetween(min, max, number, inclusive = false) {
  if (inclusive) return number >= min && number <= max;

  return number > min && number < max;
}

console.log(isBetween(3, 150, 3, true));
