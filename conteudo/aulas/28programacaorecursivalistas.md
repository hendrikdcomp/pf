---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 28 -->

# Programação recursiva em listas

**PADRÃO 1: realizar uma operação de redução numérica em uma lista de valores.**

!!! note [EXEMPLO] Escreva um programa para calcular a soma dos valores de uma lista. Ex: $\{3, 8, 20, 21, 34, 44\}$.

    _Formulação recursiva_
    $soma(\{\}) = 0\\
    soma(\{a_1...a_n\}) = a_1 + soma(\{...a_n\})$

    _Implementação em Javascript_
    ```js
    const soma = (lista) => {
        if (lista.length == 0) {return 0} 
        else {
            const head = lista.slice(0,1)[0]
            const tail = lista.slice(1)
            return (head + soma(tail))
        }
    }
    ```
    Versão com uso do já conhecido operador **_spread_** para listas.

    ```js
    const soma = (lista) => {
        if (lista.length == 0) {return 0} 
        else {
        const [x, ...xs] = lista;
        return x + soma(xs)
        }
    }
    ```
    Versão com teste acerca de _valor indefinido_ e _operador condicional ternário_ 
    ```js
    const indef = x => typeof x == 'undefined'
    const soma = ([x, ...xs]) => indef(x) ? 0 : x + soma(xs)
    ```
    [:fa-download:](../codigos/recursividade02.js)

**PADRÃO 2: retornar o elemento de uma lista que atenda a um determinado critério.**

!!! note [EXEMPLO: Lista 06, Q3] Encontrar o último elemento de uma lista qualquer passada.

    _Formulação recursiva_
    $ultimo(\{\}) = vazia\\
    ultimo(\{a_1\}) = a_1\\
    ultimo(\{a_1...a_n\}) = ultimo(\{...a_n\})$

    Uso de _função de interface_ para tratar listas vazias
    ```js
    const ultimo = ([x, ...xs]) => {
        if (indef(x)) return 'Lista vazia' 
        else return ultimoAux([x, ...xs])
    }
    const ultimoAux = ([x, ...xs]) => {
        if (xs.length == 0) return x
        else return ultimoAux(xs)
    }
    ```
    [:fa-download:](../codigos/recursividade08.js)

!!! note [EXEMPLO] Encontrar o maior elemento de uma lista.

    _Formulação recursiva_
    $maior(\{\}) = vazia\\
    maior(\{a_1\}) = a_1\\
    maior(\{a_1...a_n\}) = a_1, \text{ se } a_1 > maior(\{...a_n\})$

    ```js
    const maior = ([x,...xs]) => {
        if (indef(x)) {return 'Lista vazia'}
        else return maiorAux([x,...xs])
    }
    const maiorAux = ([x,...xs]) => {
        if (xs.length == 0) return x
        else {
            const maior = maiorAux([...xs])
            return (x > maior) ? x : maior
        }
    }
    ```
    [:fa-download:](../codigos/recursividade13.js)

**PADRÃO 3: realizar operações sobre elementos de uma lista, gerando uma nova lista.**

!!! note [EXEMPLO] Inverter a ordem dos elementos de uma lista.

    _Formulação recursiva_
    $inverte(\{\}) = \{\}\\
    inverte(\{a_1...a_n\}) = \{inverte(\{...a_n\}),a_1\}$

    ```js
    const inverte = ([x, ...xs]) => 
        indef(x) ? [] : [...inverte(xs), x]
    ```
    [:fa-download:](../codigos/recursividade09.js)

!!! note [EXEMPLO] Duplicar a presença de cada elemento de uma lista.

    _Formulação recursiva_
    $duplica(\{\}) = \{\}\\
    duplica(\{a_1...a_n\}) = \{a_1,a_1,...duplica(\{...a_n\})\}$

    ```js
    const indef = x => typeof x == 'undefined'
    const duplica = ([x, ...xs]) => 
        indef(x) ? [] : [x,x,...duplica(xs)]
    ```
    [:fa-download:](../codigos/recursividade10.js)

**PADRÃO 4: verificar se uma lista possui um elemento que atenda a uma dada propriedade/característica.**

!!! note [EXEMPLO] Verificar se uma lista possui um determinado elemento.

    _Formulação recursiva_
    $elem(e,\{\}) = F\\
    elem(e,\{a_1...a_n\}) = (e=a_1) \lor elem(e,\{...a_n\}) $

    ```js
    const elem = (e,[x,...xs]) => {
        if (indef(x)) {return false}
        else return (e===x) || elem(e,[...xs])
    }
    ``` 
    [:fa-download:](../codigos/recursividade12.js)

**PADRÃO 5: resolver problemas que envolvem duas listas.**

!!! note [EXEMPLO] Testar se uma string consiste num *palíndromo*.

    _Formulação recursiva_
    $palindromo('') = T\\
    palindromo('char1') = T\\
    palindromo('char_1...meio...char_n') = (char_1=char_n) \land palindromo('meio')$

    ```js
    const palindromo = (str) => {
        if (str.length < 2) return true
        else {
            const primeiro = str.slice(0,1)
            const ultimo = str.slice(-1)
            const meio = str.slice(1,-1)
            return (primeiro===ultimo) && palindromo(meio)
        }
    } 
    ```
    [:fa-download:](../codigos/recursividade14.js)