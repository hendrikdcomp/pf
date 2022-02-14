const fcitar = (x, y) => `${y}, ${x[0]}.`

const nome = "Albert" //ou ler do usuário
const sobrenome = "Einstein" //ou ler do usuário

resultado = fcitar(nome, sobrenome)

const citacao= `Como citar ${nome} ${sobrenome}: ${resultado}`
console.log(citacao)