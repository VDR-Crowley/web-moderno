/*
  04)​ Crie uma função que irá receber dois valores, o dividendo e o divisor. 
  A função deverá imprimir o resultado e o resto da divisão destes dois valores
*/

function getDivisor(dividendo, divisor) {
  const resulti = dividendo / divisor;
  const resto = dividendo % divisor;

  console.log(`Resultado da divisão: ${resulti} \nResto da divisão: ${resto}`);
}

getDivisor(5, 4);