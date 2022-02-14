//MAP
const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']

const addSobrenome = (sobrenome) => (nome) => `${nome} ${sobrenome}`
const nomeCompleto = nomes.map(addSobrenome("Costa"))
console.log(nomeCompleto) 