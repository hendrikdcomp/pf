/**
 * 
 * Importa funções auxiliares
 */
const {log,indef} = require('./utils.js')

/**
 * Criar uma função que busca o índice de um determinado item 
 * em uma lista ORDENADA. Se o item estiver presente, ele deve 
 * retornar o índice, caso contrário, deve retornar -1.
 * #recursividade 
 * #lista
 */
const busca = ([x,...xs],elem,acc=0) => {
    if (indef(x)) return -1 
    else if (elem===x) return acc
    else return busca(xs,elem,acc+1)
}

module.exports = {busca}