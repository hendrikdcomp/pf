---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---

# Lista 06

Para cada um dos problemas a seguir, **encontre uma fórmula recursiva** apropriada, que contemple **_caso base_** e **_passo indutivo_**. Opte pela notação de funções.

!!! note Q1. N-ésimo termo da sequência $\{3,6,12,24,48,...\}$. 

!!! note Q2. N-ésimo termo da sequência $\{0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...\}$.

!!! note Q3. Encontrar o último elemento de uma lista qualquer passada.

!!! note Q4. Soma dos n primeiros numeros naturais.

!!! note Q5. Fatorial de um número natural qualquer.

!!! note Q6. Potência natural do número 2: $2^n$. Naturalmente, você não deve utilizar o operador de expoente da linguagem.

!!! note Q7. [RESOLVIDO] Resto da divisão entre dois números inteiros positivos fornecidos, $n$ e $m$. Naturalmente, você não deve utilizar operadores de divisão da linguagem.
 
    _Ex: resto da divisão entre o número $31$ e o $7$._
    $31-7=24\\
    24-7=17\\
    17-7=10\\
    10-7=3\\
    3 < 7 \implies 3$

    $resto(n,m) = n, \forall n < m$
    $resto(n,m) = resto(n-m,m), \forall n \geq m$

!!! note Q8. Quociente da divisão entre dois números inteiros positivos fornecidos, $n$ e $m$. Naturalmente, você não deve utilizar operadores de divisão da linguagem.

!!! note Q9. Mínimo Múltiplo Comum (MMC) entre dois inteiros positivos fornecidos, $n$ e $m$. Naturalmente, você não deve utilizar operadores de divisão da linguagem.

!!! note Q10. Máximo Divisor Comum (MDC) entre dois números inteiros positivos, $n$ e $m$. Naturalmente, você não deve utilizar operadores de divisão da linguagem.

!!! note Q11. Considere o problema de gerar o montante acumulado de casos de uma doença qualquer. Como entrada, existe uma sequência de valores onde cada termo representa o número de casos daquele dia. Ex: para a sequência ${7,3,19,5,15,10}$ seria gerada a sequência ${7,10,29,34,49,59}$.