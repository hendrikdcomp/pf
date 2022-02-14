const pot = (m,n) => {
    if (n == 0) {return 1} 
    else return m*pot(m,n-1)
}
console.log(pot(2,5))