// par chave/valor
// lêxico seria tipo onde a variavel/palavra está sendo declarada
// fisicamente no codigo
const name = 'Vando' // contexto lêxico 1

const exec = function() {
  const name = 'Viviane' // contexto lêxico 2
  return name
}
// Variaveis iguais porem em contextos diferentes
console.log(name)
console.log(exec())

// Objetos são conjuntos alinhado de pares chave/valor
const client = {
  nome: 'Vinicius',
  idade: 25,
  endereco: {
    rua: 'silvestre obaoba',
    numero: 67
  }
}

console.log(client)
console.log(client.endereco)