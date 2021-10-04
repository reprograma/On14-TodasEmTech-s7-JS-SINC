function elogiar(erro, nome) {
  return console.log(nome + " você é linda");
}

function lerEntrada(callback) {
  setTimeout(() => {
    return callback(null, {
        nome: "Debora",
        saldo: 999999999.0,
    });   
  }, 3000);
}

function elogiar(erro, nome) {
  if (erro) {
    return console.log("Deu erro..");
  }
  console.log(nome);
}

lerEntrada(elogiar);
