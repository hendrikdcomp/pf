let qtde = 0

// Impura
function somar(a, b) {
    qtde++ // efeitos colaterais observáveis
    return a + b
}

// Impura
function imprimeQtde(valor) {
    console.log(`Qtde: ${valor}`)
}

imprimeQtde(qtde)
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
imprimeQtde(qtde)