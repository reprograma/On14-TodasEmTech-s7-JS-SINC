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
  
  function resolver(erro, usuaria){
    if(erro){
      return console.log( 'deu erro')
    }
    console.log(`
    Usuaria : ${usuaria.nome}
     ID: ${usuaria.id}
     email: ${usuaria.email}`)
  }
  
  pegarUsuaria(resolver)