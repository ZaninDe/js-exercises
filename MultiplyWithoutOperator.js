function multiply(a, b) {
  let sum = 0;

  if (a == 0 || b == 0) return 0;

  for (let i = 0; i < a; i++) sum += b;
  return sum;
}

console.log(multiply(2, 5));
