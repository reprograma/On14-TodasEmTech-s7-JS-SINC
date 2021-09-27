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


function pegarUsuaria(callback) { // pegar os dados da usuaria do banco
  //to usando codigo assincrono
  setTimeout(() => {
    return callback(null, { // usando objeto
      id: 123,
      nome: "pepita",
      email: "mulherpepita@gmail.com"
    })
  }, 3000)
}


//const usuaria = pegarUsuaria() // serve para funções sincronas

//console.log("usuaria : ", usuaria) // ele nao retorna o valor porque ele é assincrono, e retorna undefined

pegarUsuaria(MostraUsuaria)
