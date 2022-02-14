//const lista = [3,4,1,-2,0]
const lista = ['Maria','Pedro','Bianca','Paulo']
const posicao = (pos) => (x) => lista.indexOf(x)==(lista.length+pos)
const ultimo = posicao(-1)
const ultimoElem = lista.filter(ultimo)
console.log(ultimoElem)