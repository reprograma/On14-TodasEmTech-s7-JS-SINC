function somar(numero) {
  return numero + numero;
} // função síncrona

// somar = (numero) => {
//   return numero + numero;
// } //função síncrona com sintaxe de arrow function

// const soma = somar(3);
// console.log(soma);

console.log("Esse console vai retornar primeiro");

/*função que recebe outra função dentro. Ex setTimeout ( outra função, mas pode ser com a
  arrow function - o sinal de igual e seta () => {}), sendo assim, segue 1° parametro:
  setTimeout(() => {}) - no exemplo do 2° parametro pode-se determinar um time de retorno, 
  qnd o time em milissegundos terminar o valor será retornado, sendo: setTimeout (() =>{
    console.log("esse console vai retornar segundo");
  }, 3000); - nesse caso essa é uma função sincrona.*/
  //sincrono - retorno após um tempo.
  //assincrono - retorno imediato da função.


  setTimeout((i) => {
  console.log("Esse console vai retornar segundo");
}, 3 * 1000);

console.log("Esse console vai retornar terceiro");
