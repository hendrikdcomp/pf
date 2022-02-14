const pessoa = {
    nome: 'Fulano',
    altura: 1.70,
    cidade: 'Aracaju',
    endereco: {
        rua: 'B',
        num: 306
    }
}

// Cópia por REFERÊNCIA
const outro = pessoa

outro.nome = 'Beltrano'
outro.altura = 1.75

console.log(outro)
console.log(pessoa)