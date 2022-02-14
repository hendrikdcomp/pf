//Bibliotecas Node para ler arquivos
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

//Callback
const exibirConteudo = (_, conteudo) => 
    console.log(conteudo.toString())

//fs.readFile é uma função que usa callbacks
console.log('=== INICIO da leitura do arquivo...')
fs.readFile(caminho, exibirConteudo) 
console.log('=== FIM da leitura.\n')

console.log('=== INICIO de uma outra operação qualquer...')
const exec = (fn, a, b) => fn(a, b)
const somarNoTerminal = (x, y) => console.log(`Resultado: ${x + y}.`)
exec(somarNoTerminal, 56, 38)
console.log('=== FIM da outra operação.\n')