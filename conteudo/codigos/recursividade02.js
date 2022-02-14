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
const indef = x => typeof x == 'undefined'
const soma2 = ([x, ...xs]) => indef(x) ? 0 : x + soma2(xs)
console.log(soma2([3, 8, 20, 21, 34, 44]))

//versao 3
const soma3 = (lista) => {
  if (lista.length == 0) {
    return 0
  } else {
    const head = lista.slice(0,1)[0]
    const tail = lista.slice(1)
    return (head + soma3(tail))
  }
}
console.log(soma3([3, 8, 20, 21, 34, 44]))