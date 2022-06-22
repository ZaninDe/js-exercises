function remove(object, property) {
  const copy = { ...object };
  console.log(copy)
  delete copy[property];

  return copy;
}

console.log(remove({ a: 1, b: 2 }, 'a'));
