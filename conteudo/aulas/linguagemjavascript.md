---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---

# Javascript (Netscape, 1995)

## O que é?  
Linguagem de programação criada para ser executada em _browsers_ e permitir alteração de comportamentos de páginas Web **dinamicamente**. Exemplos de elementos dinâmicos: mapas, infográficos interativos, formulários, operações numéricas, animações, etc.

## Principais usos
Desenvolvimento Web (frameworks: jQuery, React, Vue, Angular), desenvolvimento _mobile_ (frameworks: React Native, Vue, PhoneGap, Ionic, Flutter), desenvolvimento _back-end_ (ambiente de execução Node.js), jogos (framework Phaser), etc...

## Parceiros (quase) inseparáveis  
*[HTML]: Hyper Text Markup Language
*[CSS]: Cascading Style Sheets 
HTML e CSS

## Como funciona?

![](/assets/figs/intro01.jpeg)
_Fonte: dev.to_

`Parser` identifica os elementos do código
* .js --> bytes --> tokens --> nodes 

*[AST]: Abstract Syntax Tree
AST serve para validar semanticamente esses elementos
* nodes --> AST
(ver https://astexplorer.net/)

`Interpreter` interpreta o código linha a linha
* AST --> _byte code_ (código de máquina não otimizado)

`Profiler` avalia o código (durante sua execução) a fim de identificar áreas onde técnicas de otimização podem ser aplicadas
* _byte code_  --> trechos não otimizados

`Compiler` produz novo código de máquina otimizado para os trechos identificados
* trechos não otimizados --> código otimizado

## Exemplos de _engines_

- V8 (Chrome)
- SpiderMonkey (Firefox)
- JavaScriptCore (Safari)
- Chakra (Edge)

