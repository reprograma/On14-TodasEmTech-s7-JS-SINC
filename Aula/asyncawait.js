function pegarUsuaria() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 123,
        nome: "Pepita",
        email: "mulherpepita@gmail.com",
      });
    }, 2000);
  });
}

pegarEndereco = (idUsuaria) => {
  return new Promise((resolve, reject) => {
    // return reject(new Error("endereco não encontrado"));
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

async function resolve() {
  //ao usar async dizemos que esta função é assincrona, ou seja, retorna uma promessa
  try {
    //try significa que o javascript precisa executar tudo que estiver dentro deste { escopo } e se der algum erro, ele deve ser capturado pelo catch
    const usuaria = await pegarUsuaria(); //o await significa que o javascript precisa aguardar a resolução da função assincrona passada pra poder armazenar o retorno antes de prosseguir
    const endereco = await pegarEndereco(usuaria.id); //o await só pode ser usado em funções async
    const pedidos = await pegarPedidos(usuaria.id);
    console.log(`
        Usuária: ${usuaria.nome}
        E-mail: ${usuaria.email}
        Endereco: ${endereco.rua}, ${endereco.numero}, ${endereco.cidade}
        Pedidos: ${pedidos.pedido1}, ${pedidos.pedido2}, ${pedidos.pedido3}
      `);
  } catch (err) {
    //captura qualquer erro que ocorrer dentro do try sem permitir que o código quebre
    console.error("Capturamos um erro: ", err);
  }
}

resolve(); //precisamos chamar a função
