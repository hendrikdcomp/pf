const interface = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

const fareaEli = (x, y, pi=3.14) => pi*x*y
  
interface.question('r1, r2? ', input => {
    const raio = input.split(" ")
    const r1 = parseFloat(raio[0])
    const r2 = parseFloat(raio[1])
    const resultado = fareaEli(r1,r2)
    console.log(`Área da elipse é ${resultado}!`)
    interface.close()
});



