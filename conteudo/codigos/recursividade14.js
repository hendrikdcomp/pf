const palindromo = (str) => {
    if (str.length < 2) return true
    else {
        const primeiro = str.slice(0,1)
        const ultimo = str.slice(-1)
        const meio = str.slice(1,-1)
        return (primeiro===ultimo) && palindromo(meio)
    }
}
console.log(palindromo(''))