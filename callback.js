function pegarUsuario(Callback) {
    setTimeout(()=>{
      return Callback(null, {
        nome: "dary",
        email: "daryh@mail.com",
      }):
    },2+1000);
    }

    function resolver(erro,usuario){
        if(erro){
            return console.log("deu erro")
        }
        console.log (" Usuaria:" + usuario.nome)
    }

    pegarUsuario(usuario)