//Constante global
const PI = 3.141592

// Impura: se alguém modificar valor de PI, 
// mesma função gerará valor diferente
function areaCirc(raio) {
  return raio * raio * PI
}
console.log(`Impura: ${areaCirc(10)}`)

// Impura, mas Estável
// Modificar valor de Math.PI é bem mais raro
function areaCirc2(raio) {
  return raio * raio * Math.PI
}
console.log(`Impura estável: ${areaCirc2(10)}`)

// Pura: depende apenas dos argumentos passados
// Usa parâmetros incializados
function areaCirc3(raio, pi=3.14) {
  return raio * raio * pi
}
console.log(`Pura param: ${areaCirc3(10)}`)
console.log(`Pura param: ${areaCirc3(10, 3.141592)}`)
console.log(`Pura param: ${areaCirc3(10, Math.PI)}`)

// Pura: depende apenas dos argumentos passados
// Usa constante local
function areaCirc4(raio) {
  const PI = 3.14
  return raio * raio * PI 
}
console.log(`Pura local: ${areaCirc4(10)}`)