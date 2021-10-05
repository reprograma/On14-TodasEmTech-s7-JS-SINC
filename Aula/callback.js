function pegarUsuaria(callback) {
  //callback é uma função passada como parâmetro para outra função
  setTimeout(() => {
    //usamos setTimeout na nossa aula para simular uma requisição ao banco de dados
    return callback(null, {
      //passamos null como primeiro parametro para dizer que o banco não retornou erro
      id: 123,
      nome: "Pepita",
      email: "mulherpepita@gmail.com",
    }); // o objeto que contém id, nome e email é o segundo parâmetro e representa o sucesso, ou seja, os dados que queremos do banco de dados
  }, 2000);
}

pegarEndereco = (idUsuaria, callback) => {
  setTimeout(() => {
    return callback(null, {
      rua: "rua marielle franco",
      numero: "9",
      cidade: "recife",
    });
  }, 2500);
};

pegarPedidos = (idUsuaria, callback) => {
  setTimeout(() => {
    return callback(null, {
      pedido1: "adesivo",
      pedido2: "caneca",
      pedido3: "mouse",
    });
  }, 2500);
};

pegarUsuaria(
  (resolverUsuaria = (error, usuaria) => {
    //resolverUsuaria é a função callback que estamos passando para pegarUsuaria, ela recebe erro e usuaria(que são os dados que solicitamos, podemos nomear como quisermos) como parametros
    if (error) {
      return console.error("Retornou erro para usuária ", error);
    } //se houver erro teremos esse retorno no console, como estamos usando null no nosso exemplo não teremos erro
    pegarEndereco(
      //como não houve erro, vamos chamar a função pegarEndereco pra buscar o endereco da usuaria
      usuaria.id, //usamos o usuaria.id que retornou da requisição anterior como parametro
      (resolverEndereco = (error, endereco) => {
        //resolverEndereco é a callback passada para resolver a pegarEndereco
        if (error) {
          return console.error("Retornou erro para endereco ", error);
        }
        pegarPedidos(
          usuaria.id,
          (resolverPedidos = (error, pedidos) => {
            //resolverPedidos é a callback passada para resolver a pegarEndereco
            if (error) {
              return console.error("Retornou erro para endereco ", error);
            }
            console.log(`
            Usuária: ${usuaria.nome}
            E-mail: ${usuaria.email}
            Endereco: ${endereco.rua}, ${endereco.numero}
            Pedidos: ${pedidos.pedido1}, ${pedidos.pedido2}
          `); //aqui obtivemos todos os nossos dados
          })
        );
      })
    );
  })
);
