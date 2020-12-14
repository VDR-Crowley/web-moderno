/*
  01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console 
  a soma, subtração, multiplicação e divisão desses valores.
*/

function getNumbers(numberOne, numberTwo) {
  const soma = numberOne + numberTwo;
  const sub = numberOne - numberTwo;
  const multy = numberOne * numberTwo;

  console.log(`A soma dos números: ${soma}`);
  console.log(`A subtração dos números: ${sub}`);
  console.log(`A multyplicação dos números: ${multy}`);
}

getNumbers(100, 250);