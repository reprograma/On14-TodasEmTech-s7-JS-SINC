function somar(numero) {
  return numero + numero;
} // função síncrona

// somar = (numero) => {
//   return numero + numero; 
// } //função síncrona com sintaxe de arrow function

// const soma = somar(3);
// console.log(soma);

/*console.log("Esse console vai retornar primeiro");

setTimeout(() => {
  console.log("Esse console vai retornar segundo");
}, 3 * 1000);

console.log("Esse console vai retornar terceiro");
*/
elogiar = (nome) => { console.log(nome + " você é linda");};

elogiar("kamila");

function lerEntrada(callback) {
  setTimeout(() => {
  return callback("Marlon")
  }, 3000);
}
lerEntrada(elogiar);