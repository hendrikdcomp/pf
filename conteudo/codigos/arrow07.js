const raiz = (a, b, c, f) => {
    const delta = (b * b) - (4 * a * c)
    if (delta < 0) return undefined
    const pos = ((-b) + Math.sqrt(delta))/(2*a)
    const neg = ((-b) - Math.sqrt(delta))/(2*a)
    return f(pos,neg)
}

const a = 1
const b = -5 
const c = 6

const maiorRaiz = raiz(a,b,c,(x,y)=>(x >= y? x : y))
const menorRaiz = raiz(a,b,c,(x,y)=>(x <= y? x : y))

const texto = (x,y) => x == undefined ? 'Não há raizes reais.' : `As raizes da equação são ${x} e ${y}.`

console.log(texto(menorRaiz,maiorRaiz))  