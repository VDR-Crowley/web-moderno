const valores = [12, 45, 62, 'Vando']

console.log(valores[1], valores[3])

console.log(valores[6]) // return undefined

valores[4] = false

console.log(valores)
console.log(valores.length) // return indices do array

valores.push({id: 2}, null, true, 'testando')

console.log(valores)

console.log(valores.pop()) // removendo ultimo elemento do array

delete valores[7]

console.log(valores)
