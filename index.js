/*
##Exercício da aula
  ###Vamos resolver um código assíncrono usando:
  [] Callbacks;
  [] Promises;
  [] Async/await; <~ foco desta aula, por ser o método mais moderno e usado 

##Nosso Algoritmo
  ###Simulação de requisições de dados em uma empresa de e-commerce:
    1. Informações do básicas de uma usuária;
    2. A partir da id da usuária obter o endereço cadastrado;
    3. A partir da id da usuária obter o histórico de pedidos;
*/

function pegarUsuaria (callback){
  setTimeout(() => {
    return callback (null, {
      id : 123,
      nome : "Pepita",
      email: "mulherpepita@gmail.com",
    });
  }, 2000);
}
// const usuaria = pegarUsuaria ()
// console.log("usuária: ", usuaria);

pegarEndereco = IdUsuaria = (idUsuaria, callback) => {
  setTimeout (() => {
    return callback (0, {
      rua: 'rua marielle franco',
      numero: '9',
      cidade: 'recife',
    })
  }, 2500)
}
pegarPedidos = (idUsuaria, callback) => {
  setTimeout(() => {
    return callback (null, {
      pedido1: 'asedivo',
      pedido2: 'caneca',
      pedido3: 'mouse'
    })
  })
}

pegarUsuaria(resolverUsuaria = (error, usuaria) => {
    if (error){
    return console.log('Retornou erro para usuária" , error')
  }
  pegarEndereco(usuaria.id, resolverEndereco = (error, endereco) =>{
    if (error){
      return console.error('Retornou erro para usuária' , error1);
    }
    pegarPedidos(usuaria.id, resolverPedidos = (error, pedidos) => {
      if (error) {
        return console.error('Rtornou erro para endereco', error);
      }
      console.log(`
      //terminar dps 
    })
    
    `)
  })
})


//pegarUsuaria(resolver)
















// function resolver(erro, usuaria){
//   if(erro){
//     return console.log( 'deu erro')
//   }
//   console.log(`
//   Usuaria : ${usuaria.nome}
//    ID: ${usuaria.id}
//    email: ${usuaria.email}`)
// }