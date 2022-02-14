---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---

# Lista 07

!!! note Q1. Resolver as questões da Lista 06 com recursividade em JS
!!! note Q2. Pesquise sobre o algoritmo de ordenação QUICKSORT e o implemente; complemente o template de solução a seguir. 

    _Formulação recursiva_
    $qsort(\{\}) = \{\}\\
    qsort(\{a_1...a_n\}) = ???$

    ```js
    const indef = x => typeof x == 'undefined'
    ...
    ...
    const qSort = ([x, ...xs]) => {
        if (indef(x)) {return []}
        else {
            return (????)
        }
    }
    ```

!!! note Q3. Alterar a solução do PALÍNDROMO usada como exemplo para funcionar com listas de quaisquer tipo de elementos, não apenas _string_, fazendo uso de _spread_ ao invés de `slice(...)`.
!!! note Q4. Implementar sua própria função de alta ordem `map(...)`. 
!!! note Q5. Implementar sua própria função de alta ordem `filter(...)`. 
!!! note Q6. Implementar sua própria função de alta ordem `reduce(...)`. 
!!! note Q7. Implemente a função Fatorial utilizando recursividade na cauda.