const pot = (m,n) => {
    if (n<0) return 1/potAux(m,n*(-1))
    else return potAux(m,n)
}

const potAux = (m,n) => {
    if (n == 0) {return 1} 
    else return m*potAux(m,n-1)
}

console.log(pot(2,0))