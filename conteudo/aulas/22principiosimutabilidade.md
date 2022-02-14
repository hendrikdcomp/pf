---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 22 -->

# Imutabilidade

Propriedade onde os elementos não podem ter seu valor alterado como resultado de qualquer ação por parte de expressões ou aplicação de funções. Isso protege o código de alterações indesejadas ou que passaram despercebidas e que provoquem potenciais efeitos colaterais.

Um tipo de elemento que é usualmente mutável em grande parte das linguagens de programação são os _arrays_ (listas).

## Solução: uso de cópia

Elementos **internos** de uma lista são mutáveis, apesar do uso do const. Evita-se o problema efetuando a operação desejada numa cópia da lista original. 

```js {.line-numbers}
// Elementos da lista são mutáveis, apesar do uso do const
const lista1 = [3, 1, 7, 9, 4, 6]
console.log(`Mutavel lista: ${lista1}`)

const lista2 = lista1.sort((a,b)=>a-b)
console.log(`lista (ordenada): ${lista2}`)

console.log(`lista (original): ${lista1}`)

// Corrigindo com cópia do elemento
const lista3 = [3, 1, 7, 9, 4, 6]
console.log(`Imutavel lista: ${lista3}`)

const lista4 = [...lista3].sort((a,b)=>a-b)
console.log(`lista ordenada: ${lista4}`)

console.log(`lista (original): ${lista3}`)
```
[:fa-download:](../codigos/principios06_imutabilidade.js)

## Proteção da lista com uso de congelamento

Uma alternativa à cópia é realizar o congelamento da lista através da função pré-definida `Object.freeze()`.

```js {.line-numbers}
// Object.freeze para congelar valores de uma lista
const listacongelada = Object.freeze([3, 1, 7, 9, 4, 6])

// Tentativa de ordenar sem uso de cópia
const listaordenada = listacongelada.sort((a, b) => a - b)
console.log(listacongelada, listaordenada)

// Com uso de cópia funciona
const listaordenada = [...listacongelada].sort((a, b) => a - b)
console.log(listacongelada, listaordenada)

// Acessar partes da lista congelada funciona normalmente
const pedaco = listacongelada.slice(3)
console.log(pedaco, listacongelada)
```
[:fa-download:](../codigos/principios07_imutabilidade.js)

:warning: **Operações com `map`, `filter`e `reduce` não causam problemas com o princípio da Imutabilidade pois essas operações geram cópias da lista original como resultado.**

## Imutabilidade para registros

Outra estrutura que sofre com esse aspecto e é preciso muita atenção em várias linguagens de programação são os *registros* (ou *objetos*).

```js {.line-numbers}
const pessoa = {
    nome: 'Fulano',
    altura: 1.70,
    cidade: 'Aracaju',
    endereco: {
        rua: 'B',
        num: 306
    }
}

// Cópia por REFERÊNCIA: mutável!!!
const outro = pessoa

outro.nome = 'Beltrano'
outro.altura = 1.75

console.log(outro)
console.log(pessoa)
```
[:fa-download:](../codigos/principios08_imutabilidade.js)

### Solução: congelamento e cópia por valor
```js {.line-numbers}
const pessoa = Object.freeze({
    nome: 'Fulano',
    altura: 1.70,
    cidade: 'Aracaju',
    endereco: Object.freeze({
        rua: 'B',
        num: 306
    })
})

// Alteração não efetuada: excelente!
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
```
[:fa-download:](../codigos/principios09_imutabilidade.js)

:warning: **Atente ao fato de que o `freeze` deve ser aplicado a todas as instâncias aninhadas dos registros/objetos que eventualmente existam em sua estrutura original. Caso contrário, aquela instância "desprotegida" será mutável!**