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
        return resolve({
          nome: "smartphone",
          preco: 1999.9,
        });
      } else if (produto === "tablet") {
        return resolve({
          nome: "tablet",
          preco: 2999.9,
        });
      } else {
        return reject("Produto não encontrado");
      }
    }, 2000);
  });
}

function calcularParcela(preco) {
  return new Promise((resolve) => {
    let parcelasDesejadas = 10;
    setTimeout(() => {
      return resolve(preco / parcelasDesejadas);
    }, 2000);
  });
}

notebookBigbig = async (produto, parcelasDesejadas) => {
  try {
    const capturarProdutos = await buscarPreco(produto);
    const calcularAParcela = await calcularParcela(
      capturarProdutos.preco,
      parcelasDesejadas
    );
    let valorFinal = capturarProdutos.preco.toFixed(2);
    let parcelaFinal = calcularAParcela.toFixed(2);
    console.log(
      `Seu notebook custa R$${valorFinal.replace(
        ".",
        ","
      )} e você pagará em ${parcelasDesejadas}x de R$${parcelaFinal}`
    );
  } catch (err) {
    console.error("Encontramos um erro: ", err);
  }
};

notebookBigbig("notebook", 10);
