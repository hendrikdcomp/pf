---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 33 -->

# Interface com HTML

A forma mais convencional de lidar com entradas de dados do usuário é através do uso de HTML. Usualmente, as aplicações Web utilizam HTML e Javascript para lidar com as interfaces de usuário.

Uma forma simples de fazer uso dessa parceria é criar um arquivo HTML e codificar a(s) função(ões) Javascript dentro desse próprio arquivo. Dessa forma, você está escrevendo um **código HTML** que **executa um script** para processar os dados.

!!! note [EXEMPLO] Programa para calcular a área de uma elipse com leitura de dados do usuário via HTML.

    ```html {.line-numbers}
    <!DOCTYPE html>
    <html>
    <body>

    <h1>Área da elipse</h1>
    Raio 1: <input id=input1 type="number"><br>
    Raio 2: <input id=input2 type="number"><br><br>
    <button onclick="calcula()">Calcula</button>
    <p>Área = <span id="output"></span></p>

    <script>
        const fareaEli = (x, y, pi=3.14) => pi*x*y

        const calcula = () => {
            const r1 = document.getElementById("input1").value
            const r2 = document.getElementById("input2").value
            const resultado = fareaEli(r1,r2)
            document.getElementById("output").innerHTML = resultado
        }
    </script>
    </body>
    </html>
    ```
    [:fa-download:](../codigos/entradahtml.html)

Nesse caso, é importante conhecer quais elementos HTML melhor se adequam à interface desejada. No codigo acima, por exemplo, foram utilizados dois elementos `input` numéricos, para receber os valores dos raios (linhas 6 e 7), um `button` (linha 8) que ao ser clicado informa que função Javascript deve ser executada, e um elemento `span` (linha 9) que cria uma área de texto para exibir o resultado.

Quando a função calcula é executada, os valores digitados pelo usuário nos dois elementos de `input` HTML são acessados (linhas 15 e 16) e usados na função `fareaEli` (linha 17). O resultado então é inserido no espaço de texto que havia sido definido pelo elemento `span` referenciado com o id `output` (linha 18). 

@import "/assets/figs/entradahtml01.png" {width=70%,border=1}


## Organizando o código e adicionando estilo

É possível separar o script JS em um arquivo separado e acessá-lo a partir do documento HTML. No código a seguir, o trecho entre as tags `script` do codigo anterior foi transferido para o arquivo denominado `entradahtml2.js` e essa indicação é feita na linha 4.

@import "/assets/figs/entradahtml00.png"
Arquivo HTML [:fa-download:](../codigos/entradahtml2.html)
Arquivo JS [:fa-download:](../codigos/entradahtml2.js)
Arquivo CSS [:fa-download:](../codigos/entradahtml2.css)

*[CSS]: Cascading Style Sheet
Também é possível utilizar diversos recursos de estilo providos pela linguagem CSS para deixar a interface mais bonitinha. No código, um arquivo de estilo foi criado e referenciado (linha 5). Nesse arquivo, novas cores foram atribuídas à interface.

@import "/assets/figs/entradahtml02.png" {width=70%,border=1}

## Editando e visualizando o resultado HTML/CSS/JS

Em editores como o JSFiddle, é possível codificar HTML, Javascript e CSS em um ambiente integrado e, assim, visualizar e testar o resultado das alterações quase que instantaneamente.

@import "/assets/figs/entradahtml02jsfiddle.png"