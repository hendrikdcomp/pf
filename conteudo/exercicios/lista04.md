---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---

# Lista 04

!!! note Q1. Reconsidere o exemplo sobre as compras de produtos apresentado na aula sobre *registros*. Seu programa deve ser capaz de: (a) Mostrar o carrinho de compras com o preço dos produtos em outra moeda, aplicando-se alguma taxa de câmbio (ex. 5.5 vezes), (b) Calcular o valor total gasto com a compra, (c) Calcular o valor total gasto aplicando-se algum desconto, (d) Calcular o valor total gasto com os produtos frágeis, (e) Calcular o valor total gasto com produtos que se iniciam com uma determinada letra (ex. letra 'C'), (f) Calcular o valor médio gasto por tipo de produto com a compra realizada. Para resolver adequadamente os problemas descritos, seu programa deve fazer uso da notação mais compacta de representação e acesso a dados vista neste tópico e utilizar as três operações sobre coleções de dados estudadas: `map`, `filter` e `reduce`.

    (b) Resolvido.
    (d) Resolvido.
    (f) Resolvido.

    [:fa-download:](../codigos/colecoes041.js)

!!! note Q2. Programa para encontrar o último elemento de uma lista passada. [dica: considere o uso da função pré-definida `indexOf(...)`]. Ex: `['Ana','Bia','Marcela','Carlos','Maria']` $\to$ `'Maria'`. Faça também para encontrar o penúltimo.

    Resolvido.

    [:fa-download:](../codigos/colecoes042.js)

!!! note Q3. Programa retornar o número de elementos numa lista. Ex: `[3,5,-1,4,0]` $\to$ `5`

!!! note Q4. Programa para contar quantos elementos presentes numa primeira lista estão presentes numa segunda. Dica: o _index_ de um elemento inexistente é `-1`. Ex: `['Ana','Bia','Marcela','Carlos','Maria']` e `['Bia','João, 'Marcela','Carlos','Camila']` $\to$ `3`

    Resolvido.

    [:fa-download:](../codigos/colecoes044.js)