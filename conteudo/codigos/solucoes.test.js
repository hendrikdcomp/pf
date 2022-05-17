const {log} = require('./utils.js')
const T = require('./test.js')
const S = require('./solucoes.js')

/**
 * CASOS DE TESTE
 */
T.assert(S.busca([1, 2, 3, 4],3), 2,'busca')
T.assert(S.busca([2, 4, 6, 8, 10], 8), 3,'busca')
T.assert(S.busca([1, 3, 5, 7, 9], 11), -1,'busca')
T.assert(S.busca([1, 5, 7, 11, 25, 100, 200, 350], 5), 1,'busca')