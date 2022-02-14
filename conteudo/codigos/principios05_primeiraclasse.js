// Um valor x qualquer
const x = 28
console.log(x)
// Um valor y qualquer
const y = 'maio'
console.log(y)
// Um valor z qualquer
const z = function(dia,mes,ano) {
    const data = `${dia} de ${mes} de ${ano}`
    return data
}
console.log(z(x,y,2021))
// Um valor w qualquer
const w = (dia,mes,ano) => `${dia} de ${mes} de ${ano+1}`
console.log(w(x,y,2021))