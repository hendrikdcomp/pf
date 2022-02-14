const indef = x => typeof x == 'undefined'
const menores = (x,lista) => lista.filter((y)=>y<=x)
const maiores = (x,lista) => lista.filter((y)=>y>x)
const qSort = ([x, ...xs]) => {
    if (indef(x)) {return []}
    else {
        return [...qSort(menores(x,[...xs])),x,...qSort(maiores(x,[...xs]))]
    }
}
console.log(qSort([-3,4,2,9,100,-4]))