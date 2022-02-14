---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 23 -->

# Closure

Relaciona-se ao conceito de **Escopo**. Escopo refere-se ao "mundo" em que uma função "vive" e, portanto, consegue enxergar seus elementos.

```js {.line-numbers}
// Este arquivo representa o Estado
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
```
[:fa-download:](../codigos/principios10_closureEscopo.js)

**_Closure_** é quando uma função **"lembra"** de seu **escopo léxico**, ou seja, o mundo em que ela foi definida/escrita. Logo, mesmo que a função seja executada fora desse escopo léxico, ela irá priorizar suas "origens"

```js {.line-numbers}
// Arquivo que representa um novo Estado

const bairro = require('./principios10_closureEscopo')

const x = 1000

// O valor de x acima não influencia
// porque o bairro "lembra" de suas origens
console.log(bairro(10))
```
[:fa-download:](../codigos/principios10_closure.js)