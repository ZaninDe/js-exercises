function objectToArray(obj) {
  let arr = Object.keys(obj);
  return arr.map((item) => [item, obj[item]]);
}

function objectToArrayMax(obj) {
  return Object.entries(obj);
}

console.log(
  objectToArrayMax({
    nome: 'Maria',
    profissao: 'Desenvolvedora de software',
  })
);
