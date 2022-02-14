---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 29 -->

# Recursividade na cauda

Observe a sequência aritmética a seguir e crie um programa para encontrar o valor do n-ésimo elemento: $\{2,7,12,17,22,...\}$

_Formulação recursiva_
$f(1) = 2\\
f(n) = 5 + f(n-1)$

Observe com atenção o desdobramento da aplicação da formulação recursiva para o cálculo do quinto elemento da sequência.

_Desdobramento_
$f(5) \\
= 5 + f(4) \\
= 5 + (5 + f(3)) \\
= 5 + (5 + (5 + f(2))) \\
= 5 + (5 + (5 + (5 + f(1))) \\
= 5 + (5 + (5 + (5 + 2)))\\
= 22$

Veja que a cada chamada recursiva, forma-se uma sequência acumulada de operações cujo resultado final permanece em suspenso até a última aplicação da função. Esse **acúmulo de valores exige espaço em memória** da máquina e pode eventualmente causar problemas de estouro de memória.

Uma **forma alternativa** de lidar com esse comportamento e **antecipar toda a computação parcial possível**, reduzindo a necessidade de armazenamento da valores em memória, **é acrescentar um parâmetro à função para agir como _acumulador_**.

_Formulação recursiva com acumulador_
$f(n) = f(n,2)\\
f(1,acc) = acc\\
f(n,acc) = f(n-1,5+acc)\\$

_Desdobramento_
$f(5) = f(5,2) \\
= f(4,5+2) \to f(4,7) \\
= f(3,5+7) \to f(3,12) \\
= f(2,5+12) \to f(2,17) \\
= f(1,5+17) \to f(1,22) \\
= 22$

Esse tipo de abordagem é conhecida como **Recursividade na Cauda** porque a **chamada recursiva é a ÚLTIMA operação** realizada! Atente para a diferença de comportamento da $1^a$ abordagem que não usa "cauda": a última operação realizada não é a chamada recursiva mas, sim, o somatório pendente $5 + (5 + (5 + (5 + 2))) = 22$.

_Implementação em Javascript_
```js
const f = (n) => {
    return fAux(n,2)
}

const fAux = (n,acc) => {
    if (n == 1) {return acc} 
    else return fAux(n-1,5+acc)
}
```

Perceba que a implementação passa a considerar o nosso já conhecido uso de _funcão de interface_.

:warning: **CURIOSIDADE**

***Compiladores de muitas linguagens de programação (inclusive as tipicamente funcionais) conseguem otimizar bastante as operações e, assim, reduzir o tempo de execução dos programas recursivos quando detectam o uso de recursividade na cauda.*** 

***Em Javascript, porém, essa otimização não é tão garantida. Depende de versão do compilador, suporte do browser, etc. Não é objetivo da disciplina tratar de questões específicas a linguagens ou compiladores, mas apenas passar o conceito a ser aprendido. Quem tiver interesse em conhecer mais sobre essa otimização sugiro a busca na Internet pelo termo **TAIL CALL OPTIMIZATION (TCO)**.***