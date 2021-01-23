/*
11) ​As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, 
imprimindo no console a mensagem e retornando true ou false.
*/

function checkYearsLeap(year) {
  if(year % 4 == 0 || year % 400 == 0) {
    return `${true}, ${year} is a year leap`; 
  } else if(year % 100 == 0) {
    return `${false}, ${year} not is a year leap`;
  } else if(year <= 0){
    return `${false}, ${year} not is a year leap`;
  } else {
    return `${false}, ${year} not is a year leap`;
  }
}

console.log(checkYearsLeap(2000));
console.log(checkYearsLeap(2017));
console.log(checkYearsLeap(2020));