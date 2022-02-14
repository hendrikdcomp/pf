---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 04 -->

# Funcional $\implies$ Funções

Uma `função` relaciona os elementos de dois conjuntos não vazios.

![](/assets/figs/func01.png)

(ex.) Função que relaciona um valor ao seu quadrado
$f(x) = x^2$

(ex.) Função que relaciona dois valores à soma
$g(x, y) = x + y$

(ex.) Função que relaciona três valores à média ponderada
$h(x, y, z) = \frac{(2x + 3y + 5z)}{10}$

## Pureza matemática
O resultado da aplicação dessas funções depende exclusivamente dos argumentos passados à função e nada mais.

(ex.) 
$f(3) = 9$ ...sempre!
$g(4,11) = 15$ ...sempre!
$h(5,8,7) = 6.9$ ...sempre!

Já na situação a seguir...
(ex.) 
$n = 3$
$k(x) = x + n$ 
$k(4) = 7$
Se $n$ muda para $5$...
$k(4) = 9$
Logo, função $k$ não é pura, ou seja, não depende apenas de si e pode levar a inconsistências.

