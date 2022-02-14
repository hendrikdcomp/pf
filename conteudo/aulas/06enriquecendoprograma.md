---
html:
  embed_local_images: true
  embed_svg: true
puppeteer: 
  printBackground: true
export_on_save:
    html: true
---
<!-- 06 -->

# Enriquecendo sua solução

Uma vez resolvido o problema principal, você pode realizar modificações em seu programa para que ele atenda a aoutras expectativas ou "caprichos" pessoais. 

!!! Note [EXEMPLO] Retomando o exemplo anterior, poderíamos...

    ...fazer _aplicação/uso_ das funções diretamente no console:
    ```js
    console.log(fsoma(fareaRet(6.1,4.4),fareaEli(3.0,5.3)))
    ```
    ... fazer inicialização de parâmetros na _definição_ da função...  
    ```js 
    function fareaEli(x, y, pi=3.14) { 
        //const pi = 3.1415
        return pi*x*y
    }
    ```
    ...e omitir o argumento pi na aplicação/uso...

    ```js
    console.log(fsoma(fareaRet(6.1,4.4),fareaEli(3.0,5.3)))
    ``` 
    ... OU incluir novo valor de pi na aplicação/uso:

    ```js 
    console.log(fsoma(fareaRet(6.1,4.4),fareaEli(3.0,5.3,3.14159265)))
    ```
    Finalmente, poderíamos compor texto para ajudar o usuário a entender a saída do programa:
    ```js 
    const textoRet = `retângulo de lados ${l1} e ${l2}`
    const textoEli = `elipse de raios ${r1} e ${r2}`
    const textArea = `A soma das áreas de um ${textoRet} e de uma ${textoEli} é igual a ${resultado}.`
    console.log(textArea)
    ```
    [:fa-download:](../codigos/func02.js)