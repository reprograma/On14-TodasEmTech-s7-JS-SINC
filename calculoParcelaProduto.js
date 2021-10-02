
// transformar em instancia de promise
function buscarPreco(produto) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
                  if (produto === "notebook") {
                    return resolve({
                      nome: "notebook",
                      preco: 3499.0,
                    });
                  } else if (produto === "smartphone") {
                    return resolve( {
                      nome: "smartphone",
                      preco: 1999.9,
                    });
                  } else if (produto === "tablet") {
                    return resolve ({
                      nome: "tablet",
                      preco: 2999.9,
                    });
                  } else {
                    return reject("Produto não encontrado");
                  }
                }
        , 2000)
    })
}


function calcularParcela(preco, parcelasDesejadas) {
return new Promise((resolve, reject) => {
  setTimeout(() =>{
    return resolve( preco / parcelasDesejadas)
  },2000)
})
}

// PRODUTO É A ENTRADA
resolver = async (produto,numeroDeParcelas) => {
    try{
        const dadosDoProduto = await buscarPreco(produto);
        const valorDaParcela = await calcularParcela(dadosDoProduto.preco , numeroDeParcelas);

        let valorTotal = (dadosDoProduto.preco).toFixed(2).replace(".",",")
        let valorCorrigidoDaParcela = valorDaParcela.toFixed(2).replace(".",",")

        console.log(`O valor do seu produto é R$ ${valorTotal} divididos em ${numeroDeParcelas} parcelas de R$${valorCorrigidoDaParcela}`)
    }
    catch(err){
        console.error("Erro: " + err)
    }

}


resolver("notebook",5)