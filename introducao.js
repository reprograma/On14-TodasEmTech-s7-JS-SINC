// function somar (numero){
//     return console.log(numero + numero); 
// }
 
// somar(3)

//  somar = (numero) => {
//      return numero + numero
//  }
// const soma = somar(3)
//  console.log(soma);
// funcao setTimeOut exemplo: 
//toda funcao que busca coisas em paralelo é uma funcaop assincrona (event loop que gerencia por baico dos panos)

// console.log('Esse console vai retornar primeiro');

// setTimeout(() => {console.log('Esse console vai retornar segundo')
// }, 3 * 1000)
// ;
// console.log('Esse console vai retornar terceiro');

// setTimeout (() => {
//     console.log ('retorno primeira callback')
// }, 4000);

elogiar = (nome) => {
    console.log(nome  + '  voce é linda')
}

//elogiar ('Talita')

function lerEntrada (callback){
    let  nome = 'Liniker'
    return callback
}

lerEntrada(elogiar("Liniker"));
