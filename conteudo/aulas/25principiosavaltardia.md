---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 25 -->

# Avaliação tardia

Quando unimos o poder do _Closure_ com o do _Currying_, é possível ganharmos performance através do princípio da avaliação tardia. As funções que fazem uso desse princípio são chamadas de **Funções Lazy**.

Através da avaliação tardia, é possível antecipar todo o processamento que já é possível ser executado, e adiar o que não pode ou não é possível de ser executado naquele momento. Dessa forma, ganha-se tempo. 

```js {.line-numbers}
function eager(a, b) {
    // TRECHO apenas para simular um processamento demorado
    // ignorem os detalhes de implementação
    const fim = Date.now() + 2500
    while(Date.now() < fim) {}
    // FIM DO TRECHO

    const valor = Math.pow(a, 3)
    return valor + b
}

function lazy(a) {
    // TRECHO apenas para simular um processamento demorado
    // ignorem os detalhes de implementação
    const fim = Date.now() + 2500
    while(Date.now() < fim) {}
    // FIM DO TRECHO

    const valor = Math.pow(a, 3)
    return function(b) {
        return valor + b
    }
}

console.time('#1')
console.log(eager(3, 100))
console.log(eager(3, 200))
console.log(eager(3, 300))
console.timeEnd('#1')

console.time('#2')
const lazy3 = lazy(3)
console.log(lazy3(100))
console.log(lazy3(200))
console.log(lazy3(300))
console.timeEnd('#2')
```
[:fa-download:](../codigos/principios12_lazy.js)