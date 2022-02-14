---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 21 -->

# Cidadãs de Primeira Classe

Algumas linguagens de programação tratam uma definição de função da mesma forma que tratam qualquer valor de outro tipo (ex. _inteiros, reais, texto_, etc..). Ou seja, diz-se que essas linguagens consideram uma função como **Cidadã de Primeira Classe**, de primeiro escalão.

```js {.line-numbers}
// Um valor x qualquer
const x = 28
console.log(x)
// Um valor y qualquer
const y = 'maio'
console.log(y)
// Um valor z qualquer
const z = function(dia,mes,ano) {
    const data = `${dia} de ${mes} de ${ano}`
    return data
}
console.log(z(x,y,2021))
// Um valor w qualquer
const w = (dia,mes,ano) => `${dia} de ${mes} de ${ano+1}`
console.log(w(x,y,2021))
```
[:fa-download:](../codigos/principios05_prinmeiraclasse.js)