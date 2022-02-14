const indef = x => typeof x == 'undefined'
const maior = ([x,...xs]) => {
    if (indef(x)) {return 'Lista vazia'}
    else return maiorAux([x,...xs])
}
const maiorAux = ([x,...xs]) => {
    if (xs.length == 0) return x
    else {
        const maior = maiorAux([...xs])
        return (x > maior) ? x : maior
    }
}
console.log(maior([]))