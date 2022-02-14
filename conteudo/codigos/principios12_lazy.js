function eager(a, b) {
    // TRECHO apenas para simular um processamento demorado
    // ignorem os detalhes de implementação
    const fim = Date.now() + 2500
    while(Date.now() < fim) {}
    // FIM DO TRECHO

    const valor = Math.pow(a, 3)
    return valor + b
}

function lazy(a) {
    // TRECHO apenas para simular um processamento demorado
    // ignorem os detalhes de implementação
    const fim = Date.now() + 2500
    while(Date.now() < fim) {}
    // FIM DO TRECHO

    const valor = Math.pow(a, 3)
    return function(b) {
        return valor + b
    }
}

console.time('#1')
console.log(eager(3, 100))
console.log(eager(3, 200))
console.log(eager(3, 300))
console.timeEnd('#1')

console.time('#2')
//A aplicação da função lazy() a seguir executa o trecho mais demorado.
const lazy3 = lazy(3)
//As aplicações da função lazy3() a seguir apenas precisam adicionar o valor do argumento ao cálculo mais demorado que já havia sido feito anteriormente.
console.log(lazy3(100))
console.log(lazy3(200))
console.log(lazy3(300))
console.timeEnd('#2')