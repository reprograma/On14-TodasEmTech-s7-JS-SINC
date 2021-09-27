


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
function pegaEndereco(idUsuaria, callback) {
    setTimeout(() => {
        return callback(null, { // usando objeto
            rua: "belmonte",
            numero: "56",
            cidade: "belem"
        })
    }, 2500)
}

function pegaPedido(idUsuaria, callback) {
    setTimeout(() => {
        return callback(null, { // usando objeto
            pedido1: "caneca",
            pedido2: "cadeira",
            pedido3: "mouse"
        })
    }, 2500)
}


function MostraUsuaria(pegarUsuaria = (error, usuaria) => {
    if (error) {
        console.log("nao achou a usuaria", error)
    }
    console.log(usuaria.id)
    
    MostraEndereco(usuaria.id,pegaEndereco = (error, endereco) => {
            if (error) {
                console.log("nao achou o endereco", error)
            }
            console.log(endereco.cidade)
            
            MostraPedido(usuaria.id, pegaPedido = (error, pedidos) =>{
                if (error) {
                    console.log("nao achou o pedido")
                }
                console.log(`
                  Usuaria: ${usuaria.nome}
                  E-mail: ${usuaria.email}
                  Endereço: ${endereco.rua},  ${usuaria.numero}
                  Pedidos: ${usuaria.pedidos}`)
            }
        
    

//     console.log(" essa é a usuaria: " + usuaria.nome)
//     console.log(" esse é o email: " + usuaria.email)
//     console.log(" esse é o ID : " + usuaria.id)
//     console.log(`Essa é a usuária e seu email : ${usuaria.nome}`)

  
//   pegarUsuaria(MostraUsuaria)


// function MostraEndereco(IdUsuaria, callback) {
//     if (error) {
//         console.log("usuaria nao encontrada")
//     }

// }
