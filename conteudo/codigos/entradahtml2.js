const fareaEli = (x, y, pi=3.14) => pi*x*y

const calcula = () => {
    const r1 = document.getElementById("input1").value
    const r2 = document.getElementById("input2").value
    const resultado = fareaEli(r1,r2)
    document.getElementById("output").innerHTML = resultado
}