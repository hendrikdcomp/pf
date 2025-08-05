const duplica = ([x, ...xs]) => 
    x === undefined ? [] : [x,x,...duplica(xs)]
console.log(duplica([1,2,2,3,4]))