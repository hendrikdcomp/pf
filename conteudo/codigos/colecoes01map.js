//MAP
const desconto = (desc) => (lista) => lista.map((x)=>x-x*(desc)/100)
const desconto10 = desconto(10)
const listaProdutosR$ = [10.60,8.50,5.55,6.40,41.00,23.05,19.90,15.90,22.10,2.75]
const resultado = desconto10(listaProdutosR$)
console.log(resultado)
