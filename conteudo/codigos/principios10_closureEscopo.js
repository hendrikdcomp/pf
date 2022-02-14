// Este arquivo representa o País
const x = 3

function cidade() {
    const x = 97
    function bairro(n) {
        return x + n
    }
    return bairro
}

// Não funciona: bairro está fora do escopo Estado
//console.log(bairro(5))

// Funciona: cidade está dentro do escopo Estado
console.log(cidade()(5))

module.exports = cidade()