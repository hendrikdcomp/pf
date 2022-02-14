// Exercício 2.13
const ta = 0
const xa = 500 
const tb = 30
const xb = 2000

const velocidade = (t,x,t0=0,x0=0) => (x-x0)/(t-t0)

console.log(velocidade(tb,xb))