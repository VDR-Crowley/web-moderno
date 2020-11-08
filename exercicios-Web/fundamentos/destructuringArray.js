const [a] = [10]
console.log(a)

const [n1, n2, n3, n4 = 5] = [8, 60]
console.log(n1, n2, n3, n4)

// , ignora o primero indice
const [, [, nome] ] = [[10, 7, 5], [12, 'vando']]
console.log(nome)