---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 13 -->

# O problema das compras

A seguir, iremos aplicar o conhecimento adquirido até então para resolver um primeiro problema cujos **dados** podem ser organizados através de listas e registros.

!!! note [EXEMPLO] Considere o problema de calcular o valor total a ser gasto com as compras realizadas em uma loja. Cada produto de seu carrinho de compras possui um nome, a qtde de items daquele produto, o valor unitário do produto e uma indicação de fragilidade. Adote também a possibilidade de incluir descontos na compra.

    **DADOS DO PROBLEMA**
    ```js
    const carrinho = [
        { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
        { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
        { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
        { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
        { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
    ]
    ```
    * `carrinho` é uma **LISTA** de produtos $\to$ `[produto1, produto2, produto3,produto4,produto5]`
    * cada `produto` é um **REGISTRO** contendo atributos $\to$ `{ atr1: valor, atr2: valor, atr3: valor, atr4: valor }`

    **RESULTADO: VALOR TOTAL**
    ```js
    const res1 = calcular(desc10)(todos)(carrinho[0],carrinho[1],carrinho[2],carrinho[3],carrinho[4])
    ```

    **COMO CALCULAR?**
    ```js
    const calcular = (fcalc) => (p1,p2,p3,p4,p5) => (fdesc) => fdesc(fcalc(p1,p2,p3,p4,p5))
    ```

    **DEPENDÊNCIA 1 (função `desc10`)**
    ```js
    const desc = (d=0) => (valor) => (1 - d)*valor
    const desc10 = desc(0.1)
    ```

    **DEPENDÊNCIA 2 (função `todos`)**
    ```js
    const todos = (p1,p2,p3,p4,p5) => 
        p1.qtde * p1.preco +
        p2.qtde * p2.preco +
        p3.qtde * p3.preco +
        p4.qtde * p4.preco +
        p5.qtde * p5.preco
    ```

    **PROGRAMA COMPLETO**
    ```js {.line-numbers}
    const carrinho = [
        { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
        { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
        { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
        { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
        { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
    ]

    const todos = (p1,p2,p3,p4,p5) => 
        p1.qtde * p1.preco +
        p2.qtde * p2.preco +
        p3.qtde * p3.preco +
        p4.qtde * p4.preco +
        p5.qtde * p5.preco

    const frageis = (p1,p2,p3,p4,p5) => {
        const parcial1 = p1.fragil ? p1.qtde * p1.preco : 0
        const parcial2 = p2.fragil ? p2.qtde * p2.preco : 0
        const parcial3 = p3.fragil ? p3.qtde * p3.preco : 0
        const parcial4 = p4.fragil ? p4.qtde * p4.preco : 0
        const parcial5 = p5.fragil ? p5.qtde * p5.preco : 0
        return parcial1 + parcial2 + parcial3 + parcial4 + parcial5
    }

    const desc = (d=0) => (valor) => (1 - d)*valor
    const desc10 = desc(0.1)
    const desc5 = desc(0.05)

    const calcular = (fdesc) => (fcalc) => (p1,p2,p3,p4,p5) => fdesc(fcalc(p1,p2,p3,p4,p5))

    const res1 = calcular(desc10)(todos)(carrinho[0],carrinho[1],carrinho[2],carrinho[3],carrinho[4])
    const res2 = calcular(desc5)(frageis)(carrinho[0],carrinho[1],carrinho[2],carrinho[3],carrinho[4])
    const res3 = calcular(desc())(todos)(carrinho[0],carrinho[1],carrinho[2],carrinho[3],carrinho[4])

    console.log(`Valor total é ${res1}!`)
    console.log(`Valor total dos itens frágeis é ${res2}!`)
    console.log(`Valor total sem desconto é ${res3}!`)
    ```
    [:fa-download:](../codigos/arrow08.js)