//REDUCE
const nomes = ['Organização', 'Mundial', 'Saúde']

const sigla = (acc, x) => acc + x[0]
console.log(nomes.reduce(sigla,''))