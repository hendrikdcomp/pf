---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 32 -->

# Entrada via prompt do NodeJS

A abordagem com uso do módulo `readline` e uso de *callback* funciona, mas é verborrágica.
Uma alternativa mais limpa é trabalhar de forma **síncrona** com o prompt através do módulo `prompt-sync`. Este módulo é uma função que cria **funções de prompt**.

**:warning: Primeiramente, é necessário instalar esse módulo através do TERMINAL:** 
`$ npm install prompt-sync`

!!! note [EXEMPLO] Programa para calcular a área de uma elipse com leitura de dados do usuário.

    ```js {.line-numbers, highlight=1}
    const prompt = require('prompt-sync')()
    const r1 =  parseFloat(prompt('r1? '))
    const r2 =  parseFloat(prompt('r2? '))

    const fareaEli = (x, y, pi=3.14) => pi*x*y

    const resultado = fareaEli(r1,r2)
    console.log(`Área da elipse é ${resultado}!`)
    ```
    [:fa-download:](../codigos/promptsync.js)

**:warning: Para executar o código acima no VSCode, por exemplo, é preciso acessar o TERMINAL e executar o referido código através do comando a seguir (naturalmente, você deve estar no subdiretório onde seu arquivo .js está presente):**

`$ node nomedoarquivo.js`