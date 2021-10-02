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

                          //   ENTRADA - PROCESSAMENTO - SAÍDA
  
//   precoEmDolar é a ENTRADA
  async function calcularValorEmReal(precoEmDolar) {
    try {
        const dolar = await buscarPrecoDolar();
        const juros = await buscarJurosImportacao();
        
        let precoEmReal =  precoEmDolar * dolar.comercial
        let precoFinalEmReal = (precoEmReal + (precoEmReal * juros.juros1) + (precoEmReal * juros.juros2)).toFixed(2).replace(".",",");

        console.log( `O preço final do seu produto é R$ ${precoFinalEmReal}`)

    } catch (erro) {
        console.error("Erro: ",erro)
    }
  }

  calcularValorEmReal(850)
