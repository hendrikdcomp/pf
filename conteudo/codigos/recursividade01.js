const f = (n) => {
    if (n==1) {return 2}
    else {return f(n-1)+5}
}
console.log(f(5))
const g = (n) => (n==0) ? 2 : g(n-1)+5
console.log(g(10))
