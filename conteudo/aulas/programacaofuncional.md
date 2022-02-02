---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---

# Programação Funcional

Prioriza esse formalismo matemático na formulação das soluções para os problemas computacionais propostos. A idéia é pensar no **algoritmo** como sendo uma grande e única função formada por uma **combinação** de várias outras pequenas **funções**, cada uma resolvendo uma pequena parte do problema.

**(ex 01.) _Crie um programa que calcule a soma das áreas de duas figuras geométricas distintas: um retângulo e uma elipse._**

**_Algoritmo visual_**

![](./imgs/func02.png)

**_Algoritmo em pseudocódigo_**

"DE CIMA PARA BAIXO"

resultado $\to fsoma(a1, a2)$

a1 $\to fareaRet(l1, l2)$
a2 $\to fareaEli(r1, r2)$

Subproblemas são gerados...
$l1 = ?$, $l2 = ?$, $r1 = ?$, $r2 = ?$
$fsoma(a1, a2) = ?$
$fareaRet(l1, l2) = ?$
$fareaEli(r1, r2) = ?$

... e resolvidos:
$l1$, $l2$, $r1$, $r2$ são pré-deifinidos ou fornecidos pelo usuário 
$fsoma(x, y) = x + y$
$fareaRet(x, y) = x*y$
$fareaEli(x, y) = \pi*x*y$

**_Programa em Javascript_**

"DE BAIXO PARA CIMA"

```js
...
resultado = fsoma(a1,a2)
```

```js
...
const a1 = fareaRet(l1,l2)
const a2 = fareaEli(r1,r2)

resultado = fsoma(a1,a2)
```

```js
...
const l1 = 6.1 //ou fornecido pelo usuário
const l2 = 4.4 //ou fornecido pelo usuário
const r1 = 3.0 //ou fornecido pelo usuário
const r2 = 5.3 //ou fornecido pelo usuário

const a1 = fareaRet(l1,l2)
const a2 = fareaEli(r1,r2)

resultado = fsoma(a1,a2)
```

```js
function fareaEli(x, y) {
    const pi = 3.1415
    return pi*x*y
}

function fareaRet(x, y) {
    return x*y
}

function fsoma(x, y) {
    return x + y
}

const l1 = 6.1 //ou fornecido pelo usuário
const l2 = 4.4 //ou fornecido pelo usuário
const r1 = 3.0 //ou fornecido pelo usuário
const r2 = 5.3 //ou fornecido pelo usuário

const a1 = fareaRet(l1,l2)
const a2 = fareaEli(r1,r2)

resultado = fsoma(a1,a2)

console.log(resultado)
```
[arquivo .js](codigos/func01.js)

### Notação de funções em Javascript

![](/assets/figs/func03.png)

![](/assets/figs/func04.png)