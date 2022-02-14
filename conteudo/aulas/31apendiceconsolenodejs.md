---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 31 -->

# Entrada via console do NodeJS com uso de *callback*

`Node.js` permite execução do código JavaScript fora de um browser, permitindo a interação com dados em arquivos, criação de servidores Web e criação de aplicações de terminal de trabalho. Uma das maneiras com as quais o Node permite leitura de dados do usuário em ambientes offline como o VSCode é através de um módulo especial chamado `readline`, que permite criar uma interface de conexão com o *stream* de entrada.

!!! note [EXEMPLO] Programa que cumprimenta o usuário.

    **Uso de interface com stream de entrada.** 

    ```js {.line-numbers, highlight=[]}
    const interface = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    interface.question('Qual o seu nome?\n', nome => {
        console.log(`Olá, ${nome}!`);
        interface.close();
    });
    ```

A função `question(query,callback)` exibe a `query` para o usuário no stream de saída e assim que o usuário fornece a entrada desejada, a função de `callback` é aplicada tendo essa entrada como primeiro argumento.

!!! note [EXEMPLO] Programa para calcular a área de uma elipse com leitura de dados do usuário.

    ```js {.line-numbers, highlight=[]}
    const interface = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const fareaEli = (x, y, pi=3.14) => pi*x*y
    
    interface.question('r1, r2? ', input => {
        const raio = input.split(" ")
        const r1 = parseFloat(raio[0])
        const r2 = parseFloat(raio[1])
        const resultado = fareaEli(r1,r2)
        console.log(`Área da elipse é ${resultado}!`)
        interface.close()
    });
    ```
    [:fa-download:](../codigos/consolenode.js)

**:warning: Para executar os códigos acima no VSCode, por exemplo, é preciso acessar o TERMINAL e executar o referido código através do comando a seguir (naturalmente, você deve estar no subdiretório onde seu arquivo .js está presente):**

`$ node nomedoarquivo.js`