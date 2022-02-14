//MAP
const nomes = ['Felipe','Ana', 'Bia', 'Adele', 'Gui', 'Adam', 'Rafa', 'Maria']

const tamanhoMaiorQue = (n) => (texto) => texto.length > n
const tamanhoMaiorQue4 = tamanhoMaiorQue(4)
console.log(nomes.filter(tamanhoMaiorQue4))