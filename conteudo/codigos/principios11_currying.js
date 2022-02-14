// Versão padrão
function op(a,b,c) {
    return a * (b - c)
}
console.log(op(4,3,1))

// Versão "curried"
function subcurried(a) {
    return function (b) {
        return function (c) {
            return a * (b-c)
        }
    }
}
console.log(subcurried(4)(3)(1))