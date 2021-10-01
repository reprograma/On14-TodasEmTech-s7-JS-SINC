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
    const buscarDolar = await buscarPrecoDolar();
    const capturarJuros = await buscarJurosImportacao();
    let valorPrecoReal = precoEmDolar * buscarDolar.comercial;
    let totalPreco =
      valorPrecoReal +
      valorPrecoReal * capturarJuros.juros1 +
      valorPrecoReal * capturarJuros.juros2;
    console.log(
      `O preço final do seu produto é R$ ${totalPreco
        .toFixed(2)
        .replace(".", ",")}`
    );
  } catch (error) {
    console.log(`Erro encontrado: ${error}`);
  }
}

calcularValorEmReal(850);
