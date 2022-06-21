function fisrtAndLast(array) {
  const first = array.shift();
  const last = array.pop();

  return [first, last]
}

console.log(fisrtAndLast([7, 14, 'olá']));
