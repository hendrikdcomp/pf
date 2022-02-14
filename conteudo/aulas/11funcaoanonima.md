---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 11 -->

# Função _anônima_

É possível deixarmos para definir a função desejada apenas no momento de sua aplicação/uso, **sem precisar atribuir qualquer nomenclatura**.

!!! note [EXEMPLO: Lista 02, Q12] Escreva um programa para calcular o maior e o menor valor real das raízes de uma equação de segundo grau. A expressão genérica para cálculo das raízes é dada por $\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

    "LEIA DE BAIXO PARA CIMA"

    ```js {.line-numbers}
    const raiz = (a, b, c, f) => {
        const delta = (b * b) - (4 * a * c)
        if (delta < 0) return undefined
        const pos = ((-b) + Math.sqrt(delta))/(2*a)
        const neg = ((-b) - Math.sqrt(delta))/(2*a)
        return f(pos,neg)
    }

    const a = 1
    const b = -5 
    const c = 6

    const maiorRaiz = raiz(a,b,c,(x,y)=>(x >= y? x : y))
    const menorRaiz = raiz(a,b,c,(x,y)=>(x <= y? x : y))

    const texto = (x,y) => x == undefined ? 'Não há raizes reais.' : `As raizes da equação são ${x} e ${y}.`

    console.log(texto(menorRaiz,maiorRaiz))
    ```
    [:fa-download:](../codigos/arrow07.js)

    Resultado para equação $1x^2 -5x + 6$:
    `2 e 3 `

    Resultado para equação $4x^2 -5x + 6$:
    `Não há raizes reais.`

@import "/assets/figs/arrow04.png"{width=70%}
