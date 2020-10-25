let valor // não inicializada
console.log(valor) // undefined por padrão

const a = {}
a.produto = 'Celular'

const b = a

console.log(a)
console.log(b)

b.produto = 'Computador'

console.log(a)
console.log(b)

// por baixo dos panos! a não possui o valor como objeto, ele possui a referencia
// que está alocado na memoria, e b está recebendo a referencia de a
// concluindo que os dois apontam para a mesma referencia.
// Esse tipo de atribuição é dita de atribuição por referencia de memoria

let c = 3

let d = c

d++

console.log(c)
console.log(d)