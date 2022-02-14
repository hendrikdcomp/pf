const indef = x => typeof x == 'undefined'
const duplica = ([x, ...xs]) => 
    indef(x) ? [] : [x,x,...duplica(xs)]
console.log(duplica([1,2,2,3,4]))