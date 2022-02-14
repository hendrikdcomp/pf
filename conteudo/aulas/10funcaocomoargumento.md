---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 10 -->

# Definição de função como argumento

Se uma função é um valor/expressão então ela também deve herdar o **poder de ser passada como argumento** para outra função.

```js {.line-numbers}
const subtrair = (x, y) => x - y
const somar = (x, y) => x + y
const multiplicar = (x, y) => x*y
const dividir = (x, y) => x/y
const concatenar = (x, y, sep=" ") => x+sep+y
const iniciais = (x, y) => x[0]+y[0]
const negativo = subtrair(0,y)

const exec = (f, x, y) => f(x, y)

const res1 = exec(subtrair, 50, 25)
const res2 = exec(somar, 50, 25)
const res3 = exec(multiplicar, 50, 25)
const res4 = exec(dividir, 50, 25)
const res5 = exec(concatenar, "Isaac", "Newton")
const res6 = exec(iniciais, "Isaac", "Newton")
const res7 = exec(negativo,30)

console.log(res1) //25
console.log(res2) //75
console.log(res3) //1250
console.log(res4) //...
console.log(res5)
console.log(res6)
console.log(res7)
```
[:fa-download:](../codigos/arrow06.js)

@import "/assets/figs/arrow03.png"{width=70%} 
