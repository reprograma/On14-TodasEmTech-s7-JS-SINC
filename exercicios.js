/*

1. Precisamos calcular o valor da parcela de um notebook que a Bigbig vai comprar, para isso precisamos descobrir o 
preço do produto e em seguida o número de parcelas desejadas, a partir das funções a seguir, utilize qualquer uma das
ferramentas aprendidas nesta aula para resolver o código assíncrono e obter o seguinte retorno no console: 

"Seu notebook custa R$3499,00 e você pagará em 10x de R$349,90"

*/

function buscarPreco(produto) {
    return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (produto === "notebook") {
      return resolve({
        nome: "notebook",
        preco: 3499.0,
      });
    } else if (produto === "smartphone") {
      return resolve ({
        nome: "smartphone",
        preco: 1999.9,
      });
    } else if (produto === "tablet") {
      return resolve({
        nome: "tablet",
        preco: 2999.9,
      });
    } else {
      return reject ("Produto não encontrado");
    }
  }, 2000);
});
}

function calcularParcela(preco, parcelasDesejadas) {

  return new Promise((resolve) => {
  setTimeout(() => {
    return resolve (preco / parcelasDesejadas);
  }, 2000);})
}

async function comprar(objeto, numParcelas) {
    try {
    const obj =  await buscarPreco(objeto);
    const parcelas =  await calcularParcela(obj.preco, numParcelas);

    console.log(` Seu notebook custa ${obj.preco} e você pagará em ${numParcelas}x de  ${parcelas}`)
    } catch(error) {
        console.error('erro capturado: ', error)
    }
}

comprar("notebook", 5)
/*
2. Resolva usando async/await:

Você quer saber quanto vai pagar em reais por um produto comprado nos EUA e para isso precisa consultar numa "API" 
de contação para descobrir o valor do Dólar no momento da compra (você deve usar o valor do dólar comercial) e calcular 
o valor em Real, em seguida precisa consultar outra "API" que retorna o valor de dois juros que serão cobrados sob o 
preço em Real e retornar o valor final

dados:

const precoEmDolar = 850  //preço em dólar

valor de retorno no console: "O preço final do seu produto é R$5096,94"

dica: valor em real + (valor em real * juros1) + (valor em real * juros2) = valor final

*/

function buscarPrecoDolar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        comercial: "5.26",
        turismo: "5.49",
      });
    }, 1000);
  });
}

function buscarJurosImportacao() {
  return new Promise((resolve) => {
    setTimeout(() => {
    resolve({
        juros1: 0.05,
        juros2: 0.09,
        messages:
          "os dois juros são aplicados no valor total do produto em real",
      });
    }, 1000);
  });
}

async function calcularValorEmReal(precoEmDolar) {
  try {
      const dolar = await buscarPrecoDolar()
      const juros = await buscarJurosImportacao()
      let precoEmReal = precoEmDolar * dolar.comercial;
      let precoFinal = precoEmReal + (precoEmReal * juros.juros1) + (precoEmReal * juros.juros2)
      console.log(precoFinal.toFixed(2).replace('.',','))
  } catch (error) {
      console.error('erro capturado: ', error)
  }
}
calcularValorEmReal(850)
