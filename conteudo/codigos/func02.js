/* OBS: é recomendável colocar todos os parâmetros predefinidos 
no final da lista de parâmetros, para que você possa deixar 
de fora valores opcionais facilmente. */
function fareaEli(x, y, pi=3.14) { 
    //const pi = 3.1415
    return pi*x*y
}

function fareaRet(x, y) { 
    return x*y
}

function fsoma(x, y) {
    return x + y
}

const l1 = 6.1 //parseFloat(prompt('l1 (retângulo)?'))
const l2 = 4.4 //parseFloat(prompt('l2 (retângulo)?'))
const r1 = 3.0 //parseFloat(prompt('r1 (elipse)?'))
const r2 = 5.3 //parseFloat(prompt('r2 (elipse)?'))

const a1 = fareaRet(l1,l2) 
const a2 = fareaEli(r1,r2) 

resultado = fsoma(a1,a2)

console.log(resultado)

//...fazer aplicação direta no console.log(..)
console.log(fsoma(fareaRet(6.1,4.4),fareaEli(3.0,5.3)))

//...fazer inicialização de parâmetros e usar 
//qtde diferentes de argumentos na aplicação das funções
console.log(fsoma(fareaRet(6.1,4.4),fareaEli(3.0,5.3,3.14159265)))
console.log(fsoma(fareaRet(6.1,4.4),fareaEli(3.0,5.3,3.1415,8,10)))

//...compor texto na saída para ajudar o usuário
//const textoRet = "retângulo de lados " + l1 + " e " + l2 
const textoRet = `retângulo de lados ${l1} e ${l2}`
//const textoEli = "elipse de raios " + r1 + " e " + r2 
const textoEli = `elipse de raios ${r1} e ${r2}`
//const textArea = "A soma das áreas de um " + textoRet + " e de uma " + textoEli + " é igual a " + resultado 
const textArea = `A soma das áreas de um ${textoRet} e de uma ${textoEli} é igual a ${resultado}.`
console.log(textArea)