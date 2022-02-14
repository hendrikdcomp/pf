---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 16 -->

# Operações de Redução

Um último tipo de operação fecha o trio central de operações sobre listas de valores: **REDUÇÃO**. Esse é o termo genérico usado para representar qualquer **operação que aje sobre todos os elementos** em conjunto gerando algum resultado unitário; ou seja, você **reduz** a quantidade de elementos para um único por intermédio de uma operação.

(ex.) Se    
`produtos = [100, 80, 60, 120, 90]` e 
queremos somá-los, então:
`resultado = 450`   
Ou seja, `produtos[0]+produtos[1]+produtos[2]+produtos[3]+produtos[4]`.

## Função `reduce`

Em Javascript, fazemos essa redução com uso de uma função pré-definida `reduce(f,i)` onde `f` é a função definida que representa a operação a ser efetuada sobre todos os elementos e `i` é o **valor inicial** a ser considerado na operação de redução. Por exemplo, no caso de um somatório, esse valor `i` é usualmente `0` (zero).  

Por sua vez, a função `f`, além do parâmetro usual, usa **um acumulador** `acc`. Esse parâmetro é importante para armazenar as parciais do processo de acumulação que se inicia a partir do valor inicial `i` indicado.

Para melhor entendimento, observe o somatório do exemplo anterior. À medida que os elementos vão sendo somados um a um, faz-se necessário ir armazenando essa parcial; por isso a necessidade do acumulador.

**`INÍCIO`**
`i = 0`   
`acc = i = 0`   
`acc = acc + produtos[0]`   
`acc = acc + produtos[1]`
`...`
`acc = acc + produtos[4]`


!!! note [EXEMPLO] Programa para somar os valores de toda a cesta de produtos a serem comprados.

    ```js {.line-numbers} 
    somar = (acc, x) => acc + x
    const somatorio = (lista) => lista.reduce(somar,0)
    const listaProdutosR$ = [10.60,8.50,5.55,6.40,41.00,23.05,19.90,15.90,22.10,2.75]
    const resultado = somatorio(listaProdutosR$)
    console.log(resultado)
    ```
    [:fa-download:](../codigos/colecoes01reduce.js)

!!! note [EXEMPLO] Programa para gerar uma sigla a partir do nome de uma empresa/instituição.

    ```js {.line-numbers} 
    const nomes = ['Organização', 'Mundial', 'Saúde']

    const sigla = (acc, x) => acc + x[0]
    console.log(nomes.reduce(sigla,''))
    ```
    [:fa-download:](../codigos/colecoes02reduce.js)

!!! note [EXEMPLO] Programa para contar o número de letras de uma lista de palavras.

    ```js {.line-numbers} 
    const nomes = ['Organização', 'Mundial', 'Saúde']

    const numLetras = (acc, x) => acc + x.length
    console.log(nomes.reduce(numLetras,0))
    ```
    [:fa-download:](../codigos/colecoes03reduce.js)