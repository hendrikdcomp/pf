---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 24 -->

# _Currying_

Técnica muito importante em Programação Funcional. Sua nomenclatura advém do matemático _Haskell Brooks Curry_, criador da linguagem de programação funcional Haskell, inclusive!

"Currificar" uma função significa reorganizar sua escrita para que a passagem de parâmetros seja definida gradualmente.

```js {.line-numbers}
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
```
[:fa-download:](../codigos/principios11_currying.js)

Uma das enormes vantagens de se utilizar versões _curried_ de funções é fomentar o **REUSO** através da viabilização da **APLICAÇÃO PARCIAL**. Já vimos muitos exemplos disso anteriormente no curso.

```js {.line-numbers}
// Versão "curried" com notação arrow.
const subcurried = (a) => (b) => (c) => a * (b - c)
console.log(subcurried(4)(3)(1))

// Reuso através da aplicação parcial da função.

//Ex. função subtrair dois números
const subtrair = subcurried(1)
console.log(subtrair(5)(8))

//Ex. função dobro de um número
const dobro = subcurried(-2)(0)
console.log(dobro(10))

//Ex. função negativo de um número
const negativo = subcurried(1)(0)
console.log(negativo(11))
```
[:fa-download:](../codigos/principios12_currying.js)