// //Javascript Síncrono

// //normal function

// function somar(numero){
//     return console.log(numero+numero)
// }



// //arrow function
// let soma = (numero) => {
//     return console.log(numero + numero)
// }

// return somar(3) + soma(5)

//Teste de Sincronismo &  Assíncronismo no JS

console.log("Esse console vai retornar primeiro")
setTimeout(() => {
console.log("Esse console vai retornar terceiro")}, 3000)

console.log("Esse console vai retornar segundo")
