//MAP
const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']

const primeiraLetra = (texto) => texto[0]
const iniciais = nomes.map(primeiraLetra)
console.log(iniciais)