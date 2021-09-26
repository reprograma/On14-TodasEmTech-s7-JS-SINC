// setTimeout(() => {
//   console.log("retorno primeira callback");
// }, 4000);

// setTimeout(() => {
//   console.log("retorno segunda callback");
// });

// console.log("console direto 1");

// setTimeout(() => {
//   console.log("retorno terceira callback");
// }, 2000);

// console.log("console direto 2");

// elogiar = (nome) => console.log(nome + " você é linda");

//elogiar("Talita");

//exemplo da aula pramostrar como uma callback funciona
function lerEntrada(callback) {
  setTimeout(() => {
    return callback(null, {
      nome: "deborah",
      saldo: 9999999999999.0,
    });
  }, 3000);
}

function elogiar(erro, nome) {
  //toda função callback recebe dois parâmetros, o primeiro é o erro e o segundo o sucesso(os dados que solicitamos)
  if (erro) {
    return console.log("deu erro");
  }
  console.log(nome);
} //callback

lerEntrada(elogiar); //chamando a funcão lerEntrada passando a função elogiar como callback
