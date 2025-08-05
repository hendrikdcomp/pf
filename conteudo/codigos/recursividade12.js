const elem = (e,[x,...xs]) => {
    if (x === undefined) {return false}
    else return (e===x) || elem(e,[...xs])
}
console.log(elem(0,[-3,4,2,9,100,-4]))