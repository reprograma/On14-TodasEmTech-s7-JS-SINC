function somar(numero) {
  return numero + numero;
} // função síncrona

// somar = (numero) => {
//   return numero + numero;
// } //função síncrona com sintaxe de arrow function

// const soma = somar(3);
// console.log(soma);

console.log("Esse console vai retornar primeiro");

setTimeout(() => {
  console.log("Esse console vai retornar segundo");
}, 3 * 1000);

console.log("Esse console vai retornar terceiro");
