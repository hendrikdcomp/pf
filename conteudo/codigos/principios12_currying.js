// Versão "curried" com notação arrow.
const subcurried = (a) => (b) => (c) => a * (b - c)
console.log(subcurried(4)(3)(1))

// Reuso através da aplicação parcial da função.

//Ex. função subtrair
const subtrair = subcurried(1)
console.log(subtrair(5)(8))

//Ex. função dobro de um número
const dobro = subcurried(-2)(0)
console.log(dobro(10))

//Ex. função negativo de um número
const negativo = subcurried(1)(0)
console.log(negativo(11))




