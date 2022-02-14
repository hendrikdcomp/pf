// const indef = x => typeof x == 'undefined'
// Array.prototype.map = (fn) => {
//     const [x,...xs] = this
//     if (indef(x)) return []
//     return [fn(x), ...xs.map(fn)]
//   }
// console.log([1,2,3].map((x)=>2*x))

const indef = x => typeof x == 'undefined'
const map = (fn,[x,...xs]) => {
    if (indef(x)) return []
    else return [fn(x), ...map(fn,xs)]
}
console.log(map((x)=>2*x,[1,2,3]))