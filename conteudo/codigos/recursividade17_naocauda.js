const fat = (n) => {
    if (n == 0) {return 1} 
    else return n*fat(n-1)
}

console.time('tempo')
const valor = fat(5)
console.timeEnd('tempo')
console.log(`valor: ${valor}`)
