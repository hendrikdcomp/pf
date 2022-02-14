const finalizado = () => console.log('Finalizado!!!')
setTimeout(finalizado, 3000)

const exec = (fn, a, b) => fn(a, b)
const somarNoTerminal = (x, y) => console.log(x + y)
exec(somarNoTerminal, 56, 38)

