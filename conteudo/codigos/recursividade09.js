const indef = x => typeof x == 'undefined'
const inverte = ([x, ...xs]) => 
    indef(x) ? [] : [...inverte(xs), x]
console.log(inverte([1,2,3,4]))