---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 15 -->

# Filtragem de elementos

Uma outra classe muito comum de operação em listas é a de selecionar com quais valores pertencentes à lista original se pretende trabalhar. Esse tipo de operação consiste numa **FILTRAGEM** de elementos.

(ex.) Se    
`produtos = [100, 80, 60, 120, 90]` e 
queremos selecionar apenas aqueles que custem menos que 100, então:
`produtosfiltrados = [80, 60, 90]`   
Ou seja, `produtos[i] < 100`

## Função `filter`

Em Javascript, fazemos essa filtragem com uso de uma função pré-definida `filter(f)` onde `f` é a função definida que representa o critério de seleção de cada elemento.

!!! note [EXEMPLO] Programa para selecionar produtos que custem menos que R$15.

    ```js {.line-numbers}
    const menorQue = (limite) => (lista) => lista.filter((x)=>x<limite)
    const menorQue15 = menorQue(15)
    const listaProdutosR$ = [10.60,8.50,5.55,6.40,41.00,23.05,19.90,15.90,22.10,2.75]
    const resultado = menorQue15(listaProdutosR$)
    console.log(resultado)
    ```
    [:fa-download:](../codigos/colecoes01filter.js)

!!! note [EXEMPLO] Programa para selecionar os nomes que começam com a letra "A".

    ```js {.line-numbers}
    const nomes = ['Felipe','Ana', 'Bia', 'Adele', 'Gui', 'Adam', 'Rafa', 'Maria']

    const filtroLetra = (letra) => (texto) => texto[0] == letra
    const primeiraLetraA = filtroLetra('A')
    console.log(nomes.filter(primeiraLetraA))
    ```
    [:fa-download:](../codigos/colecoes02filter.js)

!!! note [EXEMPLO] Programa para selecionar os nomes com mais de 4 letras.

    ```js {.line-numbers}
    const nomes = ['Felipe','Ana', 'Bia', 'Adele', 'Gui', 'Adam', 'Rafa', 'Maria']

    const filtroLetra = (letra) => (texto) => texto[0] == letra
    const primeiraLetraA = filtroLetra('A')
    console.log(nomes.filter(primeiraLetraA))

    const tamanhoMaiorQue = (n) => (texto) => texto.length > n
    const tamanhoMaiorQue4 = tamanhoMaiorQue(4)
    console.log(nomes.filter(tamanhoMaiorQue4))
    ```
    [:fa-download:](../codigos/colecoes03filter.js)