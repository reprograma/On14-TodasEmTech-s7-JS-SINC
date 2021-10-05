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
          preco: 99.9,
        });
      } else {
        return reject("Produto não encontrado");
      }
    }, 2000);
  });
}

function calcularParcela(preco, parcelasDesejadas) {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(preco / parcelasDesejadas);
    }, 2000);
  });
}

async function comprar(objeto, numParcelas) {
  try {
    const obj = await buscarPreco(objeto);
    const parcelas = await calcularParcela(obj.preco, numParcelas);

    console.log(
      ` Seu ${obj.nome} custa R$ ${obj.preco} e você pagará em ${numParcelas}x de R$ ${parcelas}`
    );
  } catch (error) {
    console.error("erro capturado: ", error);
  }
}

comprar("notebook", 10);
