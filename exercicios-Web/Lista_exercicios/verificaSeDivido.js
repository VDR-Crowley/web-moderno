/*
10)​Crie uma função que verifica se um número inteiro 
passado como parêmetro é divisível por 3 e retorne true ou false.
*/

function verificaDivicor(numero) {
    
  // verifica se é divisível
  if( numero % 3 == 0) {
    return true;
  } else {
    return false;
  }

}

console.log(verificaDivicor(8539));
console.log(verificaDivicor(1725));