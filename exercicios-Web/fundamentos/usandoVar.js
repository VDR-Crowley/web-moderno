/*
A palavra Var tem 2 tipos de escopo de variavel
Escopo global e de função
*/
var numero = 2

{ // escopo de bloco
  var numero = 3
  console.log(numero)
}

console.log(numero)

// usando var no escopo da função
function teste(){
  var numero = 2
  console.log(numero)
}

teste() // chama a função
console.log(numero)
