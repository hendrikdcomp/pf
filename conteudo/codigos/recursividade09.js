const inverte = ([x, ...xs]) => x === undefined ? [] : [...inverte(xs), x]
console.log(inverte([1,2,3,4]))