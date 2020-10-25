let valor // não inicializada
console.log(valor) // undefined por padrão

valor = null  // Não apota para nenhuma referencia ou valor na memoria

const a = {}
a.produto = 'Celular'

const b = a

console.log(a)
console.log(b)

b.produto = 'Computador'

console.log(a)
console.log(b)

// quando trabalhamos com objetos, ele usa conceito de referencia
// por baixo dos panos! a não possui o valor como objeto, ele possui a referencia
// que está alocado na memoria, e b está recebendo a referencia de a
// concluindo que os dois apontam para a mesma referencia.
// Esse tipo de atribuição é dita de atribuição por referencia de memoria

let c = 3

let d = c

d++

console.log(c)
console.log(d)

// quando trabalhamos com tipos primitivos da linguagem
// usa o conceito de atribuição por valor
// d faz uma copia do valor de c
// c e d são valores independentes 