---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 19 -->

# Pureza
Uma função **pura** é uma função em que o valor de retorno é determinado APENAS por seus valores de entrada, sem efeitos colaterais observáveis.

## Constantes globais vs. locais vs. parâmetros

Uso de constantes definidas globalmente no código gera funções *impuras* e *instáveis*.

```js {.line-numbers}
//Constante global
const PI = 3.141592

// Impura: se alguém modificar valor de PI, 
// mesma função gerará valor diferente
function areaCirc(raio) {
  return raio * raio * PI
}
console.log(`Impura: ${areaCirc(10)}`)
```

Uso de constantes pré definidas pela própria linguagem gera funções *impuras*, porém, *estáveis*.

```js {.line-numbers}
// Impura, mas Estável
// Modificar valor de Math.PI é bem mais raro
function areaCirc2(raio) {
  return raio * raio * Math.PI
}
console.log(`Impura estável: ${areaCirc2(10)}`)
```

Constante definida na própria função promove *pureza*.

```js {.line-numbers}
// Pura: depende apenas dos argumentos passados
// Usa parâmetros incializados
function areaCirc3(raio, pi=3.14) {
  return raio * raio * pi
}
console.log(`Pura param: ${areaCirc3(10)}`)
console.log(`Pura param: ${areaCirc3(10, 3.141592)}`)
console.log(`Pura param: ${areaCirc3(10, Math.PI)}`)

// Pura: depende apenas dos argumentos passados
// Usa constante local
function areaCirc4(raio) {
  const PI = 3.14
  return raio * raio * PI 
}
console.log(`Pura local: ${areaCirc4(10)}`)
```
[:fa-download:](../codigos/principios01_pureza.js)

## Valores aleatórios

Função com geração aleatória é naturalmente impura. A cada execução, o resultado será diferente.

```js {.line-numbers}
function gerarNumeroAleatorio(min, max) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}

console.log(gerarNumeroAleatorio(1, 10000))
console.log(gerarNumeroAleatorio(1, 10000))
console.log(gerarNumeroAleatorio(1, 10000))
console.log(gerarNumeroAleatorio(1, 10000))
console.log(gerarNumeroAleatorio(1, 10000))
```
[:fa-download:](../codigos/principios02_pureza.js)

## Efeitos colaterais observáveis
Observe o uso de `let` (ou `var`) ao invés de `const`. O conceito de variáveis para representar valores na memória computacional é típico em linguagens de programação que não seguem estritamente o Paradigma Funcional.

```js {.line-numbers}
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
```
[:fa-download:](../codigos/principios03_pureza.js)