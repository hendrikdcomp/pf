const f = (n) => {
    return fAux(n,2)
}
const fAux = (n,acc) => {
    if (n == 1) {return acc} 
    else return fAux(n-1,5+acc)
}
console.log(f(5))
