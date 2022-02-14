//MAP
const nomes = ['Felipe','Ana', 'Bia', 'Adele', 'Gui', 'Adam', 'Rafa', 'Maria']

const filtroLetra = (letra) => (texto) => texto[0] == letra
const primeiraLetraA = filtroLetra('A')
console.log(nomes.filter(primeiraLetraA))