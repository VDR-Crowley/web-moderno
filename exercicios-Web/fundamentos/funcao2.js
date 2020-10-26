// função anonima
const soma = function(a, b) {
  console.log(a + b)
}
soma(50, 50)

// Arrow function
const multy = (a, b) => {
  return a + b
}
console.log(multy(40, 40))

// retorno implicito
const sub = (a, b) => a - b // quando se tem uma linha pode se usar o return implicito
console.log(sub(1, 10))

// quando tiver um argumento, pode ocultar os parenteses
const imprimirA = a => console.log(a)
imprimirA('Legal!!!')