const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

//a.
//...a resolver

const fragil = (item) => item.fragil
const getTotal = (item) => item.qtde * item.preco
const somar = (acc, x) => acc + x

//b. 
const totalCompra = carrinho
    .map(getTotal)
    .reduce(somar,0)

console.log(`Total gasto: ${totalCompra}!`)

//c.
//...a resolver

//d.
const totalFrageis = carrinho
    .filter(fragil)
    .map(getTotal)
    .reduce(somar,0)

console.log(`Total gasto com produtos frágeis: ${totalFrageis}!`)


//e.
//...a resolver


//f.
const getMedia = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
} 

const mediaInicial = { qtde: 0, total: 0, media: 0 }

const gastoMedioGenerico = (filtro) => carrinho
    .filter(filtro)
    .map(getTotal)
    .reduce(getMedia, mediaInicial)
    .media

const gastoMedioTotal = gastoMedioGenerico((x)=>x)

const gastoMedioFragil = gastoMedioGenerico(fragil)

console.log(`A média de gastos por tipo de produto é ${gastoMedioTotal}!`)

console.log(`A média de gastos por tipo de produto frágil é ${gastoMedioFragil}!`)