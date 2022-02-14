const fquarta = (x) => fquadrado(fquadrado(x))

const fquadrado = (y) => y**2

const n = 3

resultado = fquarta(n)

const textQuarta = `Quarta potência de ${n} = ${resultado}.`
console.log(textQuarta)