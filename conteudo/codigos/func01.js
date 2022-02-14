function fareaEli(x, y) {
    const pi = 3.1415
    return pi*x*y
}

function fareaRet(x, y) {
    return x*y
}

function fsoma(x, y) {
    return x + y
}

const l1 = 6.1 //ou fornecido pelo usuário
const l2 = 4.4 //ou fornecido pelo usuário
const r1 = 3.0 //ou fornecido pelo usuário
const r2 = 5.3 //ou fornecido pelo usuário

const a1 = fareaRet(l1,l2)
const a2 = fareaEli(r1,r2)

resultado = fsoma(a1,a2)

console.log(resultado)