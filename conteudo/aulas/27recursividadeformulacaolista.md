---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 27 -->

# Formulação da recursividade em listas
Muitos problemas computacionais são resolvidos repetindo-se uma mesma computação sobre coleções de dados de tamanho cada vez menor até que se chegue a um ponto onde não há mais necessidade de continuar esse processo. Isso é típico em problemas onde identifica-se claramente o perfil de **sequência** de dados. Uma das formas de expressar matematicamente uma sequência é a **forma recursiva**, já vista anteriormente.

As bases formais já vistas da recursividade permanecem inalteradas: **CASO BASE** e **CASO GERAL (PASSO INDUTIVO)**. 

!!! note [EXEMPLO] Considere o problema de realizar a soma dos elementos de uma dada sequência de valores: $\{3, 8, 20, 21, 34, 44\}$. Encontre uma fórmula recursiva apropriada para representar essa soma.

    $\sum\{\} \implies 0\\
    \sum\{3, 8, 20, 21, 34, 44\} \implies 3 + \\
    \sum\{8, 20, 21, 34, 44\} \implies 8 + \\
    \sum\{20, 21, 34, 44\} \implies 20 +\\
    ...$

    $soma(\{\}) = 0\\
    soma(\{a_1,a_2,...,a_n\}) = a_1 + \\
    soma(\{a_2,...,a_n\}) = a_2 + \\
    ...$

    $soma(lista) = 0, \text{ caso } lista = \emptyset\\
    soma(elem1,sublista) = elem1 + soma(sublista), \text{ caso contrário.}$