function objectToArray(obj) {
  let arr = Object.keys(obj);
  return arr.map((item) => [item, obj[item]]);
}

console.log(
  objectToArray({
    nome: 'Maria',
    profissao: 'Desenvolvedora de software',
  })
);
