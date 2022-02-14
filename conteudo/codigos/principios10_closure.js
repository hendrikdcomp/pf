// Aqruivo que representa um novo País

const bairro = require('./principios10_closureEscopo')

const x = 1000

// O valor de x acima não influencia
// porque o bairro "lembra" de suas origens
console.log(bairro(10))