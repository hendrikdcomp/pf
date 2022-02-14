//REDUCE
somar = (acc, x) => acc + x
const somatorio = (lista) => lista.reduce(somar,0)
const listaProdutosR$ = [10.60,8.50,5.55,6.40,41.00,23.05,19.90,15.90,22.10,2.75]
const resultado = somatorio(listaProdutosR$)
console.log(resultado)