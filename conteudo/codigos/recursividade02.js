const soma = (lista) => {
    if (lista.length == 0) {
      return 0
    } else {
      const [x, ...xs] = lista;
      return x + soma(xs)
    }
  }
console.log(soma([3, 8, 20, 21, 34, 44]))

//versao 2
const soma2 = (lista) => {
  if (lista.length == 0) {
    return 0
  } else {
    const head = lista[0]
    const tail = lista.slice(1)
    return (head + soma2(tail))
  }
}
console.log(soma2([3, 8, 20, 21, 34, 44]))

//versao 3
const soma3 = ([x, ...xs]) => x === undefined ? 0 : x + soma3(xs)
console.log(soma3([3, 8, 20, 21, 34, 44]))