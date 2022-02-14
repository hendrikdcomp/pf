
const expoente = (e) => (base) => base**e

const quadrado = expoente(2)
const cubo = expoente(3)
const raizq = expoente(1/2)

console.log(quadrado(10))
console.log(cubo(3))
console.log(raizq(81))