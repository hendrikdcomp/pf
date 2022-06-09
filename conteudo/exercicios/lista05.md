---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---

# Lista 05

:warning: Existem funções implementadas no arquivo (módulo) `utils.js` que podem ser bastante úteis para a solução de alguns dos problemas (ou partes deles).

!!! note Q1. Reconsidere o exemplo sobre as compras de produtos apresentado na aula sobre *registros*. Seu programa deve ser capaz de: (a) Mostrar o carrinho de compras com o preço dos produtos em outra moeda, aplicando-se alguma taxa de câmbio (ex. 5.5 vezes), (b) Calcular o valor total gasto com a compra, (c) Calcular o valor total gasto aplicando-se algum desconto, (d) Calcular o valor total gasto com os produtos frágeis, (e) Calcular o valor total gasto com produtos que se iniciam com uma determinada letra (ex. letra 'C'), (f) Calcular o valor médio gasto por tipo de produto com a compra realizada. Para resolver adequadamente os problemas descritos, seu programa deve fazer uso da notação mais compacta de representação e acesso a dados vista neste tópico e utilizar as três operações sobre coleções de dados estudadas: `map`, `filter` e `reduce`.

!!! note Q2. Programa para encontrar o último elemento de uma lista passada. [dica: considere o uso da função pré-definida `indexOf(...)`]. Ex: `['Ana','Bia','Marcela','Carlos','Maria']` $\to$ `'Maria'`. Faça também para encontrar o penúltimo.

!!! note Q3. Programa retornar o número de elementos numa lista. Ex: `[3,5,-1,4,0]` $\to$ `5`

!!! note Q4. Programa para contar quantos elementos presentes numa primeira lista estão presentes numa segunda. Dica: o _index_ de um elemento inexistente é `-1`. Ex: `['Ana','Bia','Marcela','Carlos','Maria']` e `['Bia','João, 'Marcela','Carlos','Camila']` $\to$ `3`

!!! note Q5. Programa para somar todos os múltiplos de 3 e os múltiplos de 5, que são menores que 1000

!!! note Q6. Programa para retornar a diferença entre o quadrado da soma dos 10 primeiros números naturais e a soma dos quadrados dos primeiros 10 números naturais. Ou seja, $(1+2+3+...+10)^2 - (1^2 + 2^2 + 3^2 + ... + 10^2)$ 

!!! note Q7. Programa para retornar a lista de todos os números primos menores que um número natural $n$ qualquer

!!! note Q8. Programa para retornar os $n$ primeiros algarismos de um número inteiro qualquer 

!!! note Q9. Programa para retornar o número total de letras usadas na escrita por extenso em inglês dos números cardinais presentes numa sequência de valor máximo 1000 ('one thousand'). Exemplo: 225 ---> 'two hundred twenty five' ---> 20

!!! note Q10. Programa para replicar os elementos de uma lista um determinado número de vezes. Exemplo: replica [1,2,3] 4 vezes ---> [1,1,1,1,2,2,2,2,3,3,3,3]