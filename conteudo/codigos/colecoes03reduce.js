//REDUCE
const nomes = ['Organização', 'Mundial', 'Saúde']

const numLetras = (acc, x) => acc + x.length
console.log(nomes.reduce(numLetras,0))