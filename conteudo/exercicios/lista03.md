---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---

# Lista 03

**Refaça os exercícios da Lista 02**, utilizando, sempre que possível:
* a notação _arrow_
* retorno de função
* função como argumento
* funções anônimas

Você pode (deve) realizar modificações nos propósitos iniciais das questões para viabilizar a aplicacão desses conceitos em sua solução. 

### Questões resolvidas

!!! note Q9. Programa que calcula o "ou-exclusivo" entre dois valores-verdade (verdadeiro ou falso), dado por $a \otimes b = (a \lor b) \land \neg(a \land b)$.

    ```js {.line-numbers}
    const xor = (x,y) => (x || y) && !(x && y)

    const v1 = false 
    const v2 = true 

    console.log(xor(v1,v2))
    ```

    [:fa-download:](../codigos/funcexerc29.js)

!!! note Q13. Um móvel com velocidade constante percorre uma trajetória retilínea. Considere ${t_0 = 0}$, o instante inicial e ${x_0 = 500}$ a posição inicial. Escreva um programa para calcular a velocidade do objeto em um dado instante _t_ e posição _x_.
    ```js {.line-numbers}
    const ta = 0
    const xa = 500 
    const tb = 30
    const xb = 2000

    const velocidade = (t,x,t0=0,x0=0) => (x-x0)/(t-t0)

    console.log(velocidade(tb,xb))
    ```
    [:fa-download:](../codigos/funcexerc213.js)
