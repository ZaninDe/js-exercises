function multiply(a, b) {
  let sum = 0;

  for (let i = 0; i < a; i++) sum += b;
  return sum;
}

console.log(multiply(2, 5));
