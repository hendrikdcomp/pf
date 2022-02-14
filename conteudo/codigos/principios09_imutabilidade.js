const pessoa = Object.freeze({
    nome: 'Fulano',
    altura: 1.70,
    cidade: 'Aracaju',
    endereco: Object.freeze({
        rua: 'B',
        num: 306
    })
})

// Alteração não efetuada
const outro = pessoa
outro.nome = 'Beltrano'
outro.altura = 1.75
console.log('Primeira tentativa: não altera')
console.log(outro)
console.log(pessoa)

// Copia por VALOR
const maisoutro = {...pessoa}
maisoutro.nome = 'Beltrano'
maisoutro.altura = 1.75
console.log('\nSegunda tentativa: ok!')
console.log(maisoutro)
console.log(pessoa)