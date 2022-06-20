function booleanOrNumber(a) {
  if (typeof a === 'number')
    return -a
  if (typeof a === 'boolean')
    return !a
  else
    return `number or boolean type is required, but the parameter type is ${typeof a}`
}


console.log(booleanOrNumber('sdsdfg'))
