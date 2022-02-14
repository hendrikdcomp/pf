const geraSalario = (salbruto, callback) => {
    const inss = salbruto * 0.11;
    const vr = salbruto * 0.05;
    const vt = salbruto * 0.06;
    const fgts = salbruto * 0.15;
    const descontos = inss + vr + vt + fgts;
    const salliquido = salbruto - descontos;
   
    return callback(salliquido);
}

const bruto = 3000;

geraSalario(bruto, (resultado) => {
    const liquido = resultado;
    console.log(`O salário liquido é ${liquido}`);
})

