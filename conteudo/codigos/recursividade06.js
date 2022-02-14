
const resto = (n,m) => n<m ? n : resto(n-m,m)

console.log(resto(31,17))