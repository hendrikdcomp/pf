// 1.
const e = 2.718281828
const f = (x=2) => e**x
console.log(`f: ${f()}`)

//2. 
const a = Math.random()
const g = (num, min=0, max=1) => {
    const fator = max - min + 1
    return parseInt(num * fator) + min
}
console.log(`g: ${g(a,1,10)}`)

//3.
const h = (a,b,c) => (x) => a*(x**2) + b*x + c
console.log(`h: ${h(-1,2,10)}`) 

//4.
// const a1 = [1,2,3]
// const a2 = a1
// a2[0] = -1; a2[1] = -2; a2[2] = -3
// console.log(`a1: ${a1}`)
// console.log(`a2: ${a2}`)

//5.
const a1 = [1,2,3]
const a2 = a1.map((x)=>x*(-1))
console.log(`a1: ${a1}`)
console.log(`a2: ${a2}`)

//6.
const func = () => {
    const nome = 'Cicrana'
    const exibeNome = () => console.log(nome)
    return exibeNome;
}
const minhaFunc = func()
const nome = 'Belrana'
minhaFunc()

//7. 
const exec = (fn) => (...params) => fn(...params)
const soma = (x,y,z) => x+y+z
const multi = (x,y) => x*y
//const dobro = multi(2)
//console.log(`Resultado: ${exec(dobro)(16)}`)
console.log(`Resultado: ${exec(soma)(1,2,3)}`)
console.log(`Resultado: ${exec(multi)(3,5)}`)

//8.
const l1 = Object.freeze([3, 1, 7])
const decrementa = (lista) => {
    const l2 = [...lista]
    l2[0]--; l2[1]--; l2[2]--;
    return l2
}
console.log(decrementa(l1))
console.log(l1)


