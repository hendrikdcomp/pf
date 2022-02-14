const indef = x => typeof x == 'undefined'
const ultimo = ([x, ...xs]) => {
    if (indef(x)) return 'Lista vazia' 
    else return ultimoAux([x, ...xs])
}
const ultimoAux = ([x, ...xs]) => {
    if (xs.length == 0) return x
    else return ultimoAux(xs)
}
console.log(ultimo([]))