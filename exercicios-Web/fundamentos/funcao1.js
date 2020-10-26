// função do tipo void
// função default, definir os valores dos argumentos da função,
// assim podemos prever quando elas não receber um valor na sua chamada
function printSoma(a = 5, b = 10) {
  console.log(a + b)
}

printSoma(4, 5)

function printMulty(a = 5, b = 10) {
  return a * b
}

console.log(printMulty(4, 5))
console.log(printMulty())  // verificando se ira usar os seu valores padrões