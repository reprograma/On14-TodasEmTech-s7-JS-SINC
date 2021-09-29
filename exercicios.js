/*

1. Precisamos calcular o valor da parcela de um notebook que a Bigbig vai comprar, para isso precisamos descobrir o 
preço do produto e em seguida o número de parcelas desejadas, a partir das funções a seguir, utilize qualquer uma das
ferramentas aprendidas nesta aula para resolver o código assíncrono e obter o seguinte retorno no console: 

"Seu notebook custa R$3499,00 e você pagará em 10x de R$349,90"

*/

//RESOLVENDO A 1° ATIVIDADE:

console.log("______________________ATIVIDADE DA SEMANA 7_________________________")
console.log("                   At 1°: Bigbig / At 2°: API                       ")
console.log("                     'Aluna: Jeniffer Alves'                        ")

//sincrono - retorno após um tempo.
//assincrono - retorno imediato da função.

/*estamos usando arroy function assicrono, e reject, que irá finalizar com erro,
  caso o meu produto não receba as strings nome e preço.*/
/* Vamos usar o else, pois ele irá retornar os produtos que não deve ser calculado
   caso o meu if for falço*/


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
          return resolve({
            msg: "Produto não encontrado",
          });
        }
      }, 2000);
    });
  }
  
  //RESPOSTA:

  //para calcular o valor total das parcelas vamos chamar a função calcularParcela
  //dentro do parametro incluir a var preço
  
  function calcularParcela(preco) {
    return new Promise((resolve, reject) => {
      //declarando a var em let assicrono para obter o resultado imediato
      let parcelasDesejadas = 10;
      setTimeout(() => {
        return resolve({
          total: preco / parcelasDesejadas,
        });
      }, 1000);
    });
  }
  
  const pegarPreco = buscarPreco("notebook");
  pegarPreco
    .then((produto) => {
      const prod_nome = produto.nome;
      const v_note = produto.preco;
  
      const pegarParcela = calcularParcela(v_note, prod_nome);
      
      pegarParcela.then((parcela) => {
        //usar o then para retornar a funtion da promise;
        const v_total = parcela.total;
        console.log(`Seu ${prod_nome} custa $${v_note.toFixed(2)} e você pagará em 10x de $${v_total.toFixed(2)}.`);
      });
    })
    .catch((err) => {
      console.error("Erro capturado: ", err);
    });
  
  



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


// RESOLVENDO A 2° ATIVIDADE:

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
  } catch (error) {}
}

// RESPOSTA:

async function resolucao() {
  //usando a sintaxe async 
  /*try e catch marcam um bloco de declarações para testar a try,  
  e especifica uma resposta, caso uma exceção seja lançada, no caso, as const.*/
  // valor fixo na const
  try {
    const precoEmDolar = 850;
    const dolar_comercial = await buscarPrecoDolar();
    const v_comercial = dolar_comercial.comercial;
    const valor_real = precoEmDolar * parseFloat(v_comercial);
    const juros = await buscarJurosImportacao();
    const total_juros = juros.juros1 + juros.juros2;
    const valor_final = valor_real + valor_real * total_juros;
    console.log(`O preço final do seu produto é $${valor_final.toFixed(2)}.`);
  } catch (err) {
    console.error("Erro capturado: ", err);
  }
}
resolucao();