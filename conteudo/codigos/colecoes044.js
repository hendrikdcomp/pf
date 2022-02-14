const lista1 = [3,4,1,-2,0]
const lista2 = [3,8,-4,-2,0,9]
const presente = (l) => (x) =>  l.indexOf(x) != -1
const compara = (l1,l2) => l1.filter(presente(l2))
const quantosIguais = compara(lista1,lista2).length
console.log(quantosIguais)