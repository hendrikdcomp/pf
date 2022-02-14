---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 18 -->

# Manipulação de dados em arquivo

Nem todos os problemas consistem em entrada de dados fornecidas sequencialmente pelos usuários.
Existem muitos problemas em que os dados a serem processados encontram-se armazenados em arquivos (de texto, por exemplo).

A linguagem Javascript fornece dois modos de leitura de dados em arquivo: modo **SÍNCRONO** e modo **ASSÍNCRONO**.

## Modo síncrono

No modo síncrono, o arquivo é acessado e o programa interrompe seu processamento enquanto os dados estão sendo lidos. Esse é o modo típico de um diálogo por ligação telefônica convencional: enquanto um fala, o outro ouve e vice-versa.

Para leitura síncrona, Javascript disponibiliza a função pre-definida `readFileSync`. Essa função possui o caminho do arquivo como parâmetro de entrada e retorna o seu conteúdo.

!!! note [EXEMPLO] Programa que lê o conteúdo de um arquivo de texto, exibe esse conteúdo no terminal e, A SEGUIR, realiza a próxima operação programada (no exemplo, a soma de dois valores quaisquer).

    ```js {.line-numbers}
    //Bibliotecas para ler arquivos
    const fs = require('fs')
    const path = require('path')

    //Especifica o nome do arquivo
    const caminho = path.join(__dirname, 'dados.txt')

    //Fica esperando a leitura do arquivo para avançar no código.
    console.log('=== INICIO da leitura do arquivo...')
    const conteudo = fs.readFileSync(caminho)
    console.log(conteudo.toString())
    console.log('=== FIM da leitura.\n')

    console.log('=== INICIO de uma outra operação qualquer...')
    const exec = (fn, a, b) => fn(a, b)
    const somarNoTerminal = (x, y) => console.log(`Resultado: ${x + y}.`)
    exec(somarNoTerminal, 56, 38)
    console.log('=== FIM da outra operação.\n')
    ```
    [:fa-download:](../codigos/callback02.js)

## Modo assíncrono

Como visto acima, a execução de uma função precisa esperar o término da anterior. Mas em alguns casos, podemos ganhar tempo de execução realizando uma tarefa de maneira assíncrona, como acontece em um bate papo por mensageiros instantâneos (ex: Whatsapp).

Para leitura assíncrona, Javascript disponibiliza a função pre-definida `readFile`. Além do caminho do arquivo, essa função exige um segundo parâmetro de entrada: uma função responsável por realizar o processamento desejado assim que o conteúdo do arquivo tiver sido completamente lido. Ou seja, é como se mandássemos executar alguma coisa, mas essa coisa só será executada em um **momento futuro**. Existe uma nomenclatura especial para essa função que será executada em um momento futuro: **CALLBACK**.

!!! note [EXEMPLO] Programa que lê o conteúdo de um arquivo de texto no modo assíncrono, com _callback_.

    ```js {.line-numbers}
    //Bibliotecas Node para ler arquivos
    const fs = require('fs')
    const path = require('path')

    const caminho = path.join(__dirname, 'dados.txt')

    //Callback
    const exibirConteudo = (_, conteudo) => 
        console.log(conteudo.toString())

    console.log('=== INICIO da leitura do arquivo...')
    fs.readFile(caminho, exibirConteudo)
    console.log('=== FIM da leitura.\n')

    console.log('=== INICIO de uma outra operação qualquer...')
    const exec = (fn, a, b) => fn(a, b)
    const somarNoTerminal = (x, y) => console.log(`Resultado: ${x + y}.`)
    exec(somarNoTerminal, 56, 38)
    console.log('=== FIM da outra operação.\n')
    ```
    [:fa-download:](../codigos/callback02assinc.js)

Assim, a função `readFile` é uma função assíncrona que usa o _callback_ `exibirConteudo` para que seja executado no momento (futuro) em que o conteúdo do arquivo `dados.txt` tiver sido completamente lido.