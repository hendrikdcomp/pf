---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 30 -->

# Janela de *prompt*

Grande parte dos problemas exigem entrada de dados por parte do usuário para que sejam devidamente processados pelo programa Javascript e retornem algum resultado útil ao usuário do programa. **Embutir essa entrada** no código **não é a maneira mais adequada ou flexível** para resolver o problema, uma vez que teríamos que alterar a codificação cada vez que quiséssemos alterar os valores de entrada.

!!! note [EXEMPLO] Programa para calcular a área de uma elipse.

    **Entradas embutidas no código.** 

    ```js {.line-numbers}
    const fareaEli = (x, y, pi=3.14) => pi*x*y
    const r1 = 3.0
    const r2 = 5.3
    const resultado = fareaEli(r1,r2)
    console.log(resultado)
    ```

    Para calcularmos a área de outra elipse, com diferentes raios, precisamos alterar o código, modificando os valores das constantes `r1` e `r1`.

    ```js {.line-numbers}
    ...
    const r1 = 6.0
    const r2 = 10.6
    ...
    ```    

Uma alternativa para permitir que o próprio usuário utilize o programa e forneça os dados que deseja é codificarmos uma **janela de prompt**.

!!! note [EXEMPLO] Programa para calcular a área de uma elipse com entrada de dados pelo usuário.

    **Duas janelas de prompt, uma para cada raio.** 

    ```js {.line-numbers, highlight=[2,3,5]}
    const fareaEli = (x, y, pi=3.14) => pi*x*y
    const r1 = parseFloat(prompt('r1 (elipse)?'))
    const r2 = parseFloat(prompt('r2 (elipse)?'))
    const resultado = fareaEli(r1,r2)
    alert(`Área da elipse é ${resultado}!`)
    ```
    [:fa-download:](../codigos/janelaprompt.js)

    O resultado então pode ser exibido através de uma janela especifica de alerta.

:warning: **ATENÇÃO** :warning: Para executar as janelas de prompt utilize os ambientes de programação online, como o **JSFiddle (telas abaixo à esquerda)** ou o **console Javascript de um browser (telas abaixo à direita)**. Os ambientes offline, como o VSCode, possuem outra abordagem para leitura dos dados do usuário.**

@import "/assets/figs/prompt04.png" {width=45%, border=1}
@import "/assets/figs/prompt01.png" {width=45%, border=1}
@import "/assets/figs/prompt05.png" {width=45%, border=1}
@import "/assets/figs/prompt02.png" {width=45%, border=1}
@import "/assets/figs/prompt06.png" {width=45%, border=1}
@import "/assets/figs/prompt03.png" {width=45%, border=1}