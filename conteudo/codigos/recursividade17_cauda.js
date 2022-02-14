const fat = (n) => {
    return fatAux(n,1)
}
const fatAux = (n,acc) => {
    if (n == 0) {return acc} 
    else return fatAux(n-1,n*acc)
}
console.time('tempo')
const valor = fat(200)
console.timeEnd('tempo')
console.log(`valor: ${valor}`)
