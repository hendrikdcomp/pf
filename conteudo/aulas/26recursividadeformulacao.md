---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 26 -->

# Formulação da recursividade
Muitos problemas computacionais são resolvidos repetindo-se uma mesma computação sobre coleções de dados de tamanho cada vez menor até que se chegue a um ponto onde não há mais necessidade de continuar esse processo. Isso é típico em problemas onde identifica-se claramente o perfil de **sequência** de dados. Uma das formas de expressar matematicamente uma sequência é a **forma recursiva**. 

Em uma **fórmula recursiva**, cada termo é definido como uma função do seu precedente. Assim, temos que o $n-$*ésimo* termo da sequência é formado pelo $(n-1)-$*ésimo* termo mais um _step_. Essa etapa é conhecida por **PASSO INDUTIVO** da formulação. 

Formalmente: 

$a_n = a_{n-1} + step$

Esse passo se repete até chegarmos a um termo inicial que possui um valor definido e encerra essa _recorrência_. Esse termo é conhecido por **CASO BASE**.

$a_0 = base$

Usando a notação de funções, temos:

$f(n) = f(n-1) + step\\
f(0) = base$

!!! note [EXEMPLO] Observe a sequência aritmética a seguir e encontre uma fórmula recursiva apropriada: $\{2,7,12,17,22,...\}$.

    $f(0) = 2\\
    f(n) = f(n-1) + 5$
    _obs: usualmente, definimos primeiramente o caso base e depois o passo indutivo._