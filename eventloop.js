//Exemplo de comportamento assíncrono e síncrono com eventoLoop

// setTimeout(primeira = () => {
//     console.log("retorno prmeira callback") // terceiro assincrono
// }, 5000)
// setTimeout(primeira = () => {
//     console.log("retorno segunda callback") // primeiro assincrono
// })

// console.log("console direto 1") // aqui ele vai imprimir por primeiro
// setTimeout(primeira = () => {
//     console.log("retorno terceira callback") // segundo assincrono
// }, 500)
// console.log("console direto 2") // aqui ele vai imprimir por segundo

function Exemplo(callback){
    setTimeout(() =>{
        return callback(null, "Teste")
    }, 3000)
}

function ExemploUso (erro, texto){
    if (erro){
        return console.log("deu erro")
    }
    console.log(texto + " deu certo")
}


Exemplo(ExemploUso)

