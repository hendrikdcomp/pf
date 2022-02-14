---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 08 -->

# Notação _arrow_

Em Javascript, a **maneira mais intuitiva** para se representar funções como expressões se dá através da notação _arrow_.

!!! Note [EXEMPLO] Função que calcula a área de uma elipse (contendo valor de $\pi$ pré-definido).
    **$fareaEli(x,y,\pi=3.14) = \pi x y$**

    Nome da função: $fareaEli$
    Expressão de mapeamento: $(x,y,\pi=3.14) \to \pi x y$

    Em Javascript...
    ```js 
    const fareaEli = (x, y, pi=3.14) => pi*x*y
    ```

## Notação de funções _arrow_ em Javascript

![](/assets/figs/arrow01.png)

Como pode ser observado, a **nomenclatura da notação** é bem sugestiva e se dá pela presença do símbolo **`=>`** como centro do mapeamento.

!!! Note [EXEMPLO] Soma das áreas de um retângulo e de uma elipse refeito com a notação arrow.

    ```js {.line-numbers}
    const fareaEli = (x, y, pi=3.14) => pi*x*y
    const fareaRet = (x, y) => x*y
    const fsoma = (x, y) => x + y

    const l1 = 6.1 //parseFloat(prompt('l1 (retângulo)?'))
    const l2 = 4.4 //parseFloat(prompt('l2 (retângulo)?'))
    const r1 = 3.0 //parseFloat(prompt('r1 (elipse)?'))
    const r2 = 5.3 //parseFloat(prompt('r2 (elipse)?'))

    const a1 = fareaRet(l1,l2) 
    const a2 = fareaEli(r1,r2) 

    resultado = fsoma(a1,a2)

    console.log(resultado)
    ```
    [:fa-download:](../codigos/arrow01.js)

Observe, nas linhas `10, 11 e 13` que a **aplicação da função** permanece com o **mesmo formato**.

!!! Note [EXEMPLO: Lista 02, Q8] Escrever uma função que retorne o valor de um número elevado à quarta potência. Essa função deve fazer uso de uma outra que calcula o quadrado de um número qualquer.

    **_Algoritmo em pseudocódigo_**

    "DE CIMA PARA BAIXO"

    resultado $\to fquarta(n)$

    Subproblemas são gerados...
    $n = ?$
    $fquarta(n) = ?$

    ... e resolvidos:
    $n$ é pré-deifinido ou fornecido pelo usuário 
    $fquarta = (x) => fquadrado(fquadrado(x))$

    Novo subproblema é gerado...
    $fquadrado(x) = ?$

    ... e resolvido:
    $fquadrado = (y) => y**2$

    **_Programa em Javascript_**

    "DE BAIXO PARA CIMA"

    ```js {.line-numbers}
    const fquarta = (x) => fquadrado(fquadrado(x))

    const fquadrado = (y) => y**2

    const n = 3

    resultado = fquarta(n)

    const textQuarta = `Quarta potência de ${n} = ${resultado}.`
    console.log(textQuarta)
    ```
    [:fa-download:](../codigos/arrow02.js)

!!! Note [EXEMPLO: Lista 02, Q10 (adaptado)] Escreva um programa que dados o primeiro nome e o último sobrenome de uma pessoa qualquer, retorne-os em forma de citação bibliográfica conforme exemplo: Fulano Santos --> Santos, F.

    **_Programa em Javascript_**

    "LEIA DE BAIXO PARA CIMA"

    ```js {.line-numbers}
    const fcitar = (x, y) => `${y}, ${x[0]}.`

    const nome = "Albert" //ou ler do usuário
    const sobrenome = "Einstein" //ou ler do usuário

    resultado = fcitar(nome, sobrenome)

    const citacao= `Como citar ${nome} ${sobrenome}: ${resultado}`
    console.log(citacao)
    ```
    [:fa-download:](../codigos/arrow03.js)