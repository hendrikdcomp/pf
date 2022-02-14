// Lista mutável, apesar do uso do const
const lista1 = [3, 1, 7, 9, 4, 6]
console.log(`Mutavel lista: ${lista1}`)

const lista2 = lista1.sort((a,b)=>a-b)
console.log(`lista (ordenada): ${lista2}`)

console.log(`lista (original): ${lista1}`)

// Corrigindo com clone/cópia
const lista3 = [3, 1, 7, 9, 4, 6]
console.log(`Imutavel lista: ${lista3}`)

const lista4 = [...lista3].sort((a,b)=>a-b)
console.log(`lista ordenada: ${lista4}`)

console.log(`lista (original): ${lista3}`)