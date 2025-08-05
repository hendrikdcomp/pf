const maior = ([x,...xs]) => {
    if (x === undefined) {return 'Lista vazia'}
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