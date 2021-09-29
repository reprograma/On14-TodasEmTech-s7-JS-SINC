function pegarUsuaria() {
  return new Promise((resolve, reject) => {
    //criamos uma promise a partir do Objeto Promisse
    setTimeout(() => {
      return resolve({
        //resolve é chamada se a requisição foi resolvida (sucesso)
        id: 123,
        nome: "Pepita",
        email: "mulherpepita@gmail.com",
      });
    }, 2000);
  });
}

pegarEndereco = (idUsuaria) => {
  return new Promise((resolve, reject) => {
    // return reject(new Error("endereco não encontrado")); //reject é chamado se a requisição nfoi rejeitada (erro)
    setTimeout(() => {
      return resolve({
        rua: "rua marielle franco",
        numero: "9",
        cidade: "recife",
      });
    }, 2500);
  });
};

pegarPedidos = (idUsuaria) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        pedido1: "adesivo",
        pedido2: "caneca",
        pedido3: "mouse",
      });
    }, 2500);
  });
};

const usuariaPromise = pegarUsuaria();

usuariaPromise
  .then((usuaria) => {
    //usamos then para tratar a resposta da promise caso ela tenha sido resolvida, seu parametro (que escolhemos chamar de usuaria) é o retorno da funcão resolve()
    return pegarEndereco(usuaria.id).then((endereco) => {
      //podemos encadear vários thens pois seu retorno também é uma promise
      return {
        usuaria: {
          id: usuaria.id,
          nome: usuaria.nome,
          email: usuaria.email,
        }, //precisamos passar no retorno do segundo then os dados de usuaria explicitamente, por esse then retorna por padrão só as informações da última requisição, que seria endereco
        endereco: {
          rua: endereco.rua,
          numero: endereco.numero,
          cidade: endereco.cidade,
        },
      };
    });
  })
  .then((resposta) => {
    return pegarPedidos(resposta.usuaria.id).then((pedidos) => {
      return {
        usuaria: resposta.usuaria,
        endereco: resposta.endereco,
        pedidos: pedidos,
      };
    });
  })
  .then((resultado) => {
    console.log(`
      Usuária: ${resultado.usuaria.nome}
      E-mail: ${resultado.usuaria.email}
      Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
      Pedidos: ${resultado.pedidos.pedido1}, ${resultado.pedidos.pedido2}
    `);
  })
  .catch((err) => {
    //usamos catch oara capturar o erro caso a requisição tenha falhado, seu parâmetro é o erro retornado do banco de dados
    console.error("Capturamos um erro: ", err);
  });
