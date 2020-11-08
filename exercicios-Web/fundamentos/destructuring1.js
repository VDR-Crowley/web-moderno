const carro = {
  cor: 'Red',
  modelo: 2016,
  motor: 1.6,
  marca: 'ford',
  nome: 'fiesta',
  loja: {
    endereco: 'bbb',
    numero: 66
  }
}
// pega nome e marca do objeto carro
const {nome, marca} = carro
// destruturação feita
// monstro no console essas variaveis
console.log(nome, marca)

const { cor: c, motor: m } = carro
console.log(c, m)

const { modelo, rodas = true } = carro
console.log(modelo, rodas)

// pega objeto o que esta dentro do objeto loja
// que esta dentro do objeto carro
const { loja: { endereco, numero, cep } } = carro
console.log(endereco, numero, cep)