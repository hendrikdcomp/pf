const indef = x => typeof x == 'undefined'

//Padrão 1
const recsoma = ([x, ...xs]) => indef(x) ? 0 : Number(x) + recsoma(xs)

//Padrão 2
const recultimo = ([x, ...xs]) => {
    if (indef(x)) return 'Lista vazia' 
    else return recultimoAux([x, ...xs])
}
const recultimoAux = ([x, ...xs]) => {
    if (xs.length == 0) return x
    else return recultimoAux(xs)
}

const recmaior = ([x,...xs]) => {
    if (indef(x)) return 'Lista vazia'
    else return recmaiorAux([x,...xs])
}
const recmaiorAux = ([x,...xs]) => {
    if (xs.length == 0) return x
    else {
        const maior = recmaiorAux([...xs])
        return (x > maior) ? x : maior
    }
}

//Padrão 3
const recinverte = ([x, ...xs]) => 
    indef(x) ? [] : [...recinverte(xs), x]

const recduplica = ([x, ...xs]) => 
    indef(x) ? [] : [x,x,...recduplica(xs)]

//Padrão 4
const recelem = (e,[x,...xs]) => {
    if (indef(x)) {return false}
    else return (e===x) || recelem(e,[...xs])
}

//Padrão 5
const recpalindromo = (str) => {
    if (str.length < 2) return true
    else {
        const primeiro = str.slice(0,1)
        const ultimo = str.slice(-1)
        const meio = str.slice(1,-1)
        return (primeiro===ultimo) && recpalindromo(meio)
    }
} 