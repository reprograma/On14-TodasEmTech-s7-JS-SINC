


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

  function pegaEndereco(endereco, callback) {
    setTimeout(() => {
    return callback(0, { // usando objeto
        rua: "belmonte",
        numero: "56"
      })
    }, 2500)
      
  }

  

function MostraUsuaria(erro, usuaria) {
    if (erro) {
      console.log("nao achou a usuaria")
    }
    console.log(" essa é a usuaria: " + usuaria.nome)
    console.log(" esse é o email: " + usuaria.email)
    console.log(" esse é o ID : " + usuaria.id)
    console.log(`Essa é a usuária e seu email : ${usuaria.nome}`)
  }
  
  pegarUsuaria(MostraUsuaria)


  