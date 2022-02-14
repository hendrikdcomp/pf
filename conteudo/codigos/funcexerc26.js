// Exercício 2.6

function fquantosIguais(x, y, z) { 
    if (x==y && y==z)
        return 3
    else if (x!=y && y!= z && x!= z)
            return 0
         else 
            return 2
}

const a = 6
const b = 5 
const c = 4

const resultado = fquantosIguais(a,b,c)  

console.log(resultado)