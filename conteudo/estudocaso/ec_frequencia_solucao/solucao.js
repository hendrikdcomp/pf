const fs = require("fs");
const path = require("path");

//Recebe o array com o nome dos arquivos e retorna um array com os caminhos(paths) de cada.
const paths = (nomesDosArquivos) =>
  nomesDosArquivos.map((nomeDoArquivo) => path.join(__dirname, nomeDoArquivo));

//Recebe um texto e retira dele o símbolo passado como argumento.
const retirar = (texto) => (simbolo) => texto.toString().replace(simbolo, " ");
  
//Coloca os arquivos de texto num mesmo array.
const novaString = (textos) => retirar(textos)(/\]\[/);

//Recebe o array de paths dos arquivos e retorna a string dos textos em um unico array(func newString).
const carregarArquivos = (caminhos) =>
caminhos.map((caminho) => fs.readFileSync(caminho, novaString));

//Retira símbolos que não sejam letras ou números, por exemplo, usando expressões regulares.
const retiraSimbolos = (texto) => retirar(texto)(/[^A-zÀ-ÿ\s\d]/gim);

//Retira números do texto.
const retiraNumeros = (texto) => retirar(texto)(/[0-9]/gim);

//Retira colchetes do texto.
const retiraColchetes = (texto) => retirar(texto)(/\[.*?\]/g);

//Retira quebras de linha(tab,/n, etc).
const retiraQuebraDeLinha = (texto) => retirar(texto)(/\s/gm);

//Retira '\' do texto
const retiraBackslash = (texto) => retirar(texto)(/\\+/g);

//Divide o texto em palavras somente (retirando os espaços).
const divideEspaco = (texto) => texto.toString().toLowerCase().split(/\ +/);

//No caso de caracteres retirados que deixaram um 'espaço vazio', elimina as virgulas desses espaços que dividem o texto desnecessariamente.
const retiraVirgulasExtras = (texto) => retirar(texto)(/\,(?=\,+)/g);

//Mapeia cada palavra do texto, verificando se são iguais. Se for, aumenta a quantidade em 1 e aumenta a porcentagem, se não for, gera um objeto com a palavra nova.
const contaPalavras = (texto) => {
  const textoFormatado = texto.toString().split(",");
  return textoFormatado.reduce((acc, palavra) => {
    if (!acc[palavra]) {
      acc[palavra] = {
        palavra: palavra,
        qtd: 1,
        "%": parseFloat(((100 / texto.length)).toFixed(3)),
      };
    } else {
      acc[palavra].qtd += 1;
      acc[palavra]["%"] = parseFloat(
        ((acc[palavra].qtd*100) / texto.length).toFixed(3)
      );
    }
    return acc;
  }, {});
};

//Recebe o texto formatado e devolve um array de objetos (passado como argumento em contaPalavras).
const retornaObjetos = (texto) => Object.values(contaPalavras(texto));

//Recebe objetos, ordenando a partir do atributo qtd em ordem decrescente.
const ordenar = (lista) => lista.sort((a, b) => (a.qtd > b.qtd ? -1 : 1));

//Cria resultado.txt com o array de objetos que contam as palavras.
const textoResultado = (texto) => {
  fs.writeFileSync(__dirname+
    "/resultado.txt",
    JSON.stringify(texto).replace(/\,(?=\{)/gm, "\n"),
    "utf-8"
  );
  console.log("Arquivo Criado!");
};

const composicao = (...fns) => (arg) => fns.reduce((acc, fn) => fn(acc), arg);

//Composição de todas funções recebe uma lista de nomes de arquivos
const gerarResultado = composicao(
  paths,
  carregarArquivos,
  retiraSimbolos,
  retiraNumeros,
  retiraColchetes,
  retiraQuebraDeLinha,
  retiraBackslash,
  divideEspaco,
  retiraVirgulasExtras,
  retornaObjetos,
  ordenar,
  textoResultado
);

const dados = ["dados1.txt", "dados2.txt"];

gerarResultado(dados);
