const peso1 = 1.54
const peso2 = Number('2.0')

console.log(Number.isInteger(peso1)) // Verifica se o numero é inteiro e retorna um boolean
console.log(Number.isInteger(peso2))

console.log(Number.isFinite(peso1)) // Verifica se o numero é finito
console.log(Number.isFinite(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 8.672

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // casas decimais a ser exibida depois do ponto
console.log(media.toString(2)) // Transforma em binario com o 2 nos parenteses

console.log(typeof media)
console.log(typeof Number)