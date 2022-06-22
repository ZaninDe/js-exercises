function filterNumbers(arr) {
  return arr.filter((item) => typeof item === 'number');
}

//filter between range
function between(arr) {
  return arr.filter((item) => item > 0 && item < 10);
}

console.log(filterNumbers(['Javascript', 1, '3', 'Web', 20]));
