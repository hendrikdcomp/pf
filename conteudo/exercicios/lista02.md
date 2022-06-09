---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---

# Lista 02  

_OBS: em todos os casos, uma vez resolvido o problema original, procure enriquecer seu programa com algumas das ideias ilustradas no material de aula._ 

!!! note Q1. Programa para calcular a área de um retângulo dados os comprimentos de duas arestas
    Já resolvido no material de aula.

!!! note Q2. Programa para calcular a área de uma circunferência dado o valor do raio.

!!! note Q3. Programa para determinar se três valores passados podem representar um triângulo ou não.

!!! note Q4. Programa para classificar um triângulo em Equilátero, Isósceles ou Escaleno a partir dos valores de seus três lados.

!!! note Q5. Programa para calcular a distância euclidiana entre dois pontos $[(x1, y1), (x2,y2)]$ no plano cartesiano. Utilize a equação geral da reta para calcular a distância quando a reta não for paralela a nenhum dos eixos (abscissas ou ordenadas) e as versões simplificadas quando for paralela.

!!! note Q6. Fornecidos três valores, a, b e c, escreva um programa que retorne quantos dos três são iguais. A resposta pode ser 3 (todos iguais), 2 (apenas um diferente) ou 0 (todos diferentes).

    [Algoritmo]

    resultado $\to fquantosIguais(a, b, c)$

    Subproblemas são gerados...
    $a = ?$, $b = ?$, $c = ?$
    $fquantosIguais(...,...) = ?$

    ... e resolvidos:
    $a$, $b$, $c$ são pré-definidos ou fornecidos pelo usuário 
    $fquantosIguais(x, y, z) =$ Se $x=y=z$ então retorne $3$, senão, Se $x\neq y \neq z$ então retorne 0, caso contrário, retorne $2$.   

!!! note Q7. Programa para retornar o menor valor entre três números quaisquer. Tente resolver considerando o sub-problema de determinar o menor valor entre dois números quaisquer (obs: em caso de valores iguais, deve-se retornar como resultado o próprio valor).

!!! note Q8. Escrever um programa que calcule o valor de um número elevado à quarta potência. Tente fazer uso do sub-problema de calcular o quadrado de um número qualquer.

!!! note Q9. Programa que calcula o "ou-exclusivo" entre dois valores-verdade (verdadeiro ou falso), dado por $a \otimes b = (a \lor b) \land \neg(a \land b)$.

!!! note Q10. Escreva um programa que dados o primeiro nome e o último sobrenome de uma pessoa qualquer, retorne-os em forma de citação bibliográfica conforme exemplo: Fulano Santos --> Santos, Fulano.

!!! note Q11. Dados três valores, escreva um programa que retorne quantos desses três valores são maiores que o valor médio entre eles.

!!! note Q12. Escreva um programa para calcular o maior e o menor valor real das raízes de uma equação de segundo grau. A expressão genérica para cálculo das raízes é dada por $\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.

!!! note Q13. Um móvel com velocidade constante percorre uma trajetória retilínea. Considere ${t_0 = 0}$, o instante inicial e ${x_0 = 500}$ a posição inicial. Escreva um programa para calcular a velocidade do objeto em um dado instante _t_ e posição _x_.

!!! note Q14. Programa que escreva por extenso um determinado algarismo passado como argumento.