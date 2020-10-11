let isAtivo = true

console.log(!isAtivo)

isAtivo = false

console.log(!isAtivo)

// verdadeiros
console.log('\nVerdadeiras\n')
console.log(!!' ')
console.log(!!Infinity)
console.log(!![ ])
console.log(!!{ })
console.log(!!123)
console.log(!!(isAtivo = true))

// falsos
console.log('\nFalsas\n')
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))
