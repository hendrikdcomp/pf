const calcularporcentagemmultilplicacao= (auxiliar)=>(numbase)=>(porcen)=> numbase*(auxiliar+(porcen/100))  // Versao currificada da função para calcular porcentagem, permitindo reuso
const calcularporcentagemdeumnum=calcularporcentagemmultilplicacao(0)//Nessa função o auxiliar é predefinido para a formula e os outros dois valores puxamos do arquivo html
const aumentopercentual=calcularporcentagemmultilplicacao(1)
const descontopercentual=calcularporcentagemmultilplicacao(1)
const calcularporcentagemdivisao=(auxiliar)=>(numbase)=>(porcen)=>numbase/(auxiliar+porcen/100)//Mesma função acima, unica mudança sendo a divisao para a formula
const margemdevenda=calcularporcentagemdivisao(1)
const variavelapercentual=(auxiliar)=>(numbase)=>(porcen)=>((numbase/porcen)+auxiliar)*100 // Funçao currificada para manipularmos o auxiliar na formula
const variacaoperenctuall=variavelapercentual(-1)
const relacaopercentuall=variavelapercentual(0)
const valorfuturojurossimples=(valorpres,taxa,periodo)=>{ //Esse return é pra quando for chamada a função para o arquivo o resultado ser atribuido a constante do arquivo
    return valorpres * (1 + ((taxa / 100) * periodo))
}
const valorpresentejurossimples=(valorfuturo,taxa,periodo)=> {
    return valorfuturo / (1 + (taxa / 100) * periodo)}

    const taxaouperiodos = (periodo) => (taxa) => (valorpresente) => (valorfuturo) => (valorfuturo - valorpresente) / (valorpresente * periodo * (taxa / 100))//mais um caso de curry, onde pode se anular ou a taxa ou o periodo fazendo a formula do proprio anulado
    const periodosjss = taxaouperiodos(1)

const potencia = (base,expoente) => {         // função para potencias com numeros inteiros, quando for com numeros nao inteiros sera usada a math.pow visto que para criar uma quebraria o paradigma funcional
    if (base<0) return 1/potenciaaux(base,expoente*(-1))
    else return potenciaaux(base,expoente)
}

const potenciaaux = (base,expoente) => {
    if (expoente === 0) {return 1}
    else return base*potenciaaux(base,expoente-1)
}

const valorfuturojuroscomp=(valoratual,taxa,periodo)=>{
    return valoratual * potencia(1 + taxa / 100, periodo)
}
const valorpresentejuroscomp=(valorfuturo,taxa,periodo)=>{
    return valorfuturo / potencia(1 + taxa / 100, periodo)
}

const taxaemjuroscomp=(valoratual,valorfuturo,periodo)=>{
    return (Math.pow(valorfuturo / valoratual, 1 / periodo) - 1) * 100
}
const periodoemjuroscomp=(valorpresente,valorfuturo,taxa)=>{  //função predefinida pois para criar uma de log seria necessario usar um while/for e isso quebraria os requisitos do trabalho
    return Math.log(valorfuturo / valorpresente) / Math.log(1 + taxa / 100)
}
const conversaotaxadejuros=(periodode)=>(periodopara)=>(taxa)=>(Math.pow(1+(taxa/100),periodopara/periodode)-1)*100
const conversaotaxadejurosaux=(periodode)=>(periodopara)=>(taxa)=>(Math.pow(1+(taxa/100),(((periodopara/periodopara)/(periodode/periodopara))))-1)*100

const valorfuturodinhonotemp=(taxa,periodo,valorperiodico,valorpresente)=>{
    return valorpresente * potencia(1 + (taxa / 100), periodo) + valorperiodico * (potencia(1 + (taxa / 100), periodo) - 1) / (taxa / 100)
}
const valorpresentedinhnotemp=(taxa,periodo,valorperiodico,valorfuturo)=>{
    return valorfuturo / potencia(1 + (taxa / 100), periodo) + valorperiodico * (potencia(1 + (taxa / 100), periodo) - 1) / (potencia(1 + (taxa / 100), 1 + periodo) - potencia(1 + (taxa / 100), periodo))
}
const valordaparcela=(numerodeparcelas,taxa,valorpresente,valorfuturo)=>{
    return ((taxa / 100) * (valorpresente * potencia((taxa / 100) + 1, numerodeparcelas) + valorfuturo)) / (potencia((taxa / 100) + 1, numerodeparcelas) - 1)
}
const numerodeparcelas=(taxa,valorperiodico,valorpresente,valorfuturo)=>{
    return Math.log((valorperiodico - (taxa / 100) * valorfuturo) / (valorperiodico + (taxa / 100) * valorpresente)) / Math.log(1 + (taxa / 100))
}
 function aumentoporcentual() {                                                 //Funções que realizam os calculos e devolvem o valor para o arquivo html
        const numbase = parseFloat(document.getElementById('n1').value);
        const numporcento = parseFloat(document.getElementById('n2').value);
        const resultado = aumentopercentual(numbase)(numporcento)            // Essa chamada é para colocar esse resultado no arquivo e mostrar para o usuario
        document.getElementById('result').value = resultado;
    }

    function porcendonum() {
        const numbase = parseFloat(document.getElementById('n1').value);
        const numporcento = parseFloat(document.getElementById('n2').value);
        const resultado = calcularporcentagemdeumnum(numbase)(numporcento)
        document.getElementById('result').value = resultado;
    }

    function descontoporcentual() {
        const numbase = parseFloat(document.getElementById('n1').value);
        const numporcen = parseFloat(document.getElementById('n2').value);
        const resultado = descontopercentual(numbase)((numporcen) * -1)
        document.getElementById('result').value = resultado;

    }

    function margemvenda() {
        const numbase = parseFloat(document.getElementById('n1').value);
        const numporcen = parseFloat(document.getElementById('n2').value);
        const resultado = margemdevenda(numbase)((numporcen) * -1)
        document.getElementById('result').value = resultado;


    }

    function variacaopercentual() {
        const numbase = parseFloat(document.getElementById('n2').value);
        const numporcem = parseFloat(document.getElementById('n1').value);
        const resultado = variacaoperenctuall(numbase)((numporcem))
        document.getElementById('result').value = resultado;


    }

    function relacaopercentual() {
        const numbase = parseFloat(document.getElementById('n1').value);
        const numporcen = parseFloat(document.getElementById('n2').value);
        const resultado = relacaopercentuall(numbase)(numporcen)
        document.getElementById('result').value = resultado;


    }

    function valorfuturojs() {
        const valorpresente = parseFloat(document.getElementById("n1js").value)
        const taxa = parseFloat(document.getElementById("n3js").value)
        const periodos = parseInt(document.getElementById("n4js").value)
        const resultado = valorfuturojurossimples(valorpresente, taxa, periodos)
        document.getElementById('resultjs').value = resultado
    }

    function valorpresentejs() {
        const valorfuturo = parseFloat(document.getElementById("n2js").value)
        const taxa = parseFloat(document.getElementById("n3js").value)
        const periodos = parseInt(document.getElementById("n4js").value)
        const resultado = valorpresentejurossimples(valorfuturo, taxa, periodos)
        document.getElementById('resultjs').value = resultado
    }

    function taxajs() {
        const valorpresente = parseFloat(document.getElementById("n1js").value)
        const valorfuturo = parseFloat(document.getElementById("n2js").value)
        const periodos = parseInt(document.getElementById("n4js").value)
        const resultado = taxaouperiodos(periodos)(100)(valorpresente)(valorfuturo)
        document.getElementById('resultjs').value = resultado * 100
    }

    function periodosjs() {
        const valorpresente = parseFloat(document.getElementById("n1js").value)
        const valorfuturo = parseFloat(document.getElementById("n2js").value)
        const taxa = parseFloat(document.getElementById("n3js").value)
        const resultado = periodosjss(taxa)(valorpresente)(valorfuturo)
        document.getElementById('resultjs').value = resultado
    }
    function valorfuturojc(){
const valorpresente=parseFloat(document.getElementById("n1jc").value)
        const taxa=parseFloat(document.getElementById("n3jc").value)
        const periodos=parseInt(document.getElementById("n4jc").value)
        const resultado=valorfuturojuroscomp(valorpresente,taxa,periodos)
        document.getElementById('resultjc').value=resultado
    }
    function valorpresentejc(){
    const valorfuturo=parseFloat(document.getElementById("n2jc").value)
        const taxa=parseFloat(document.getElementById("n3jc").value)
        const periodos=parseInt(document.getElementById("n4jc").value)
        const resultado= valorpresentejuroscomp(valorfuturo,taxa,periodos)
        document.getElementById('resultjc').value=resultado

    }
    function taxajc(){
const valorpresente=parseFloat(document.getElementById("n1jc").value)
const valorfuturo=parseFloat(document.getElementById("n2jc").value)
        const periodos=parseInt(document.getElementById("n4jc").value)
        const resultado= taxaemjuroscomp(valorpresente,valorfuturo,periodos)
        document.getElementById('resultjc').value=resultado

}
function periodosjc(){
    const valorpresente=parseFloat(document.getElementById("n1jc").value)
    const valorfuturo=parseFloat(document.getElementById("n2jc").value)
    const taxa=parseFloat(document.getElementById("n3jc").value)
    const resultado= periodoemjuroscomp(valorpresente,valorfuturo,taxa)
    document.getElementById('resultjc').value=resultado

}
function convertertaxas(){
    const taxa=parseFloat(document.getElementById("Ctaxa").value)
    const periodode=parseInt(document.getElementById("P1taxa").value)
    const periodopara=parseInt(document.getElementById("P2taxa").value)
    if(periodode < periodopara) {
        const resultado = conversaotaxadejuros(periodode)(periodopara)(taxa)
        document.getElementById('resultadotaxa').value=resultado

    }
    else if(periodode===periodopara){
        const resultado=taxa
        document.getElementById('resultadotaxa').value=resultado
    }
    else {
        convertertaxasaux()
    }}
    function convertertaxasaux(){
        const taxa=parseFloat(document.getElementById("Ctaxa").value)
        const periodode=parseInt(document.getElementById("P1taxa").value)
        const periodopara=parseInt(document.getElementById("P2taxa").value)
        const resultado = conversaotaxadejurosaux(periodode)(periodopara)(taxa)

        document.getElementById('resultadotaxa').value = (resultado)

    }
function dntvf(){
const valorpresente=parseFloat(document.getElementById("DntVPr").value)
    const valorperiodico=parseFloat(document.getElementById("DnTVP").value)
    const taxa=parseFloat(document.getElementById("DnTaxa").value)
    const periodos=parseInt(document.getElementById("Dntper").value)
    const resultado=valorfuturodinhonotemp(taxa,periodos,valorperiodico,valorpresente)
    document.getElementById('Dntres').value=resultado

}
function dntvp(){
const valorfuturo=parseFloat(document.getElementById("DnTVF").value)
    const valorperiodico=parseFloat(document.getElementById("DnTVP").value)
    const taxa=parseFloat(document.getElementById("DnTaxa").value)
    const periodos=parseInt(document.getElementById("Dntper").value)
    const resultado=valorpresentedinhnotemp(taxa,periodos,valorperiodico,valorfuturo)
    document.getElementById('Dntres').value=resultado
}
function feevp(){
    const taxa=parseFloat(document.getElementById("FeEtaxa").value)
    const periodos=parseInt(document.getElementById("FeEperiodo").value)
    const valorpresente=parseFloat(document.getElementById("FeEVPr").value)
    const valorfuturo=parseFloat(document.getElementById("FeEVF").value)
    const resultado=valordaparcela(periodos,taxa,valorpresente,valorfuturo)
    document.getElementById('FeEres').value=resultado
}
function feepr(){
    const taxa=parseFloat(document.getElementById("FeEtaxa").value)
    const valorperiodico=parseFloat(document.getElementById("FeEVP").value)
    const valorpresente=parseFloat(document.getElementById("FeEVPr").value)
    const valorfuturo=parseFloat(document.getElementById("FeEVF").value)
    const resultado=numerodeparcelas(taxa,valorperiodico,valorfuturo,valorpresente)
    document.getElementById('FeEres').value=resultado*-1
}



