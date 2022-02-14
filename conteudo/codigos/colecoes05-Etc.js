//faça uma função que dada uma lista de inteiros, para cada inteiro k no indice i dessa lista este  
//valor é substituido por uma lista com dois elementos da forma [k,i].
//dica: A função fornecida como argumento para o map recebe o valor atual, 
//indice atual e a lista original como argumentos. 
//exemplo: [10,6,8,3,1] => [[10,0], [6,1], [8,2], [3,3], [1,4]] 
const colocaIndice = (value, k) => [value,k]
function quest1 (array){
    return array.map((value,i) => colocaIndice(value,i))
}
console.log(quest1([10,6,8,3,1], 5))

//faça uma função que dada uma lista de n inteiros e um inteiro k, 
//devolve "true" caso esse inteiro ocorra pelo menos uma vez na lista
//e retorna "false" caso contrario
//exemplo: [10,6,8,3,1] e 5 =>  false / [10,6,8,3,1] e 6 =>  true

const encontra = (value, k) => value == k
function existe (array,k){
    if (array.filter((value) => encontra(value,k)).length > 0){
        return true
    }
    return false
}
console.log(existe([10,6,8,3,1], 5))

//faça uma função que receba uma lista de inteiros de 1 a n, e calcule o fatorial de n.
//dica: A função fornecida como argumento para o reduce recebe 4 argumentos. 
//os valores são o Acumulador, valor Atual, indice atual e por ultimo a lista original.
//exemplo: [1,2,3,4,5,6] => 720 
function fatorial(array){
    return array.reduce((acc, val,i)=>{
            return acc*(i+1)
    }
    ,1)
}
console.log(fatorial([1,2,3,4,5]))

//faça uma função para achar o elemento de valor maximo em uma lista de inteiros.
//dica: Faça uso da função pré definida shift()
//exemplo: [1,4,-3,2,6,0,3,5,-1] => 6
const lista = [1,4,-3,2,6,0,3,5,-1]
const maior = (x,y) => x >= y? x:y 
function maximo (array) {
    return array.reduce(maior,array.shift())
}
console.log(maximo(lista))

//faça uma função que recebe uma lista de inteiros e retorna o resultado da media 
//dos inteiros impares multiplicados por 3.
//exemplo: [1,4,-3,2,6,0,3,5,-1] => 1,6666666
const lista2 = [1,4,-3,2,6,0,3,5,-1]
const soma = (acc,x) => x + acc
const impares = (x) => x %2 != 0
const mult = (x) => x * 3
function media (array) {
    return array
        .map(mult)
        .filter(impares)
        .reduce(soma)/array.length
}
console.log("media : ", media(lista2))

//Dados uma lista e um elemento k, faça uma função para determinar todos indices dessa lista 
//onde o elemento k ocorre.
//exemplo: [1,4,1,2,6,0,3,5,1]  1 => [0,2,8]
const lista3 = [1,4,1,2,6,0,3,5,1]
const second = (x) => x.pop()
const iguais = (elemento,y) => elemento == y.shift()
const zipar = (value,indice) => [value,indice]

function indices(array,elemento){
    return array
    .map((value,indice)=> zipar(value,indice))
    .filter((y) => iguais(elemento,y))
    .map(x => second(x))
} 

console.log("o elemento 1 ocorre nos indices ", indices(lista3,1), `da lista : ${lista3}`)


//dados dois conjuntos, faça uma função para determinar se esses dois conjuntos são disjuntos.
//Ou seja, se a interseção destes conjuntos é vazia.
//exemplo: [1,2,3] [4,5,6] => true 
const junta = (acc,atual) => acc.concat(atual)
const mapeiaB = (valueA, valueB) => valueA == valueB
const mapeiaA = (valueA,b) => b.filter((valueB) => mapeiaB(valueA, valueB))
const _disjuntos = (a,b) => 
    a
    .map((valueA) => mapeiaA(valueA,b))
    .reduce(junta,[])

function disjuntos(a,b){
    if(_disjuntos(a,b).length == 0){
        return "conjuntos disjuntos"
    }
    else{
        return "conjuntos não disjuntos"
    }
}
//ou, podemos reutilizar o codigo da questão 4.3
const presente = (l) => (x) =>  l.indexOf(x) != -1
const compara = (l1,l2) => l1.filter(presente(l2))
function quantosIguais(conjuntoA,conjuntoB){ 
    if( compara(conjuntoA,conjuntoB).length > 0){   
        return   "conjuntos não disjuntos"
    }
    return "conjuntos distintos"
}
//console.log(quantosIguais([1,2,3],[4,5,6]))
console.log(disjuntos([1,2,3],[4,5,6]))