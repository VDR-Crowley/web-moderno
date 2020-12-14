function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = { 
  name: 'Notebook',
  preco: 2990,
  desc: 0.15,
  getPreco
}

global.preco = 20
global.desc = 0.17

console.log(produto.getPreco())

const carro = { preco: 3580, desc: 0.20 }

console.log(getPreco.call(carro, 4555, '$'));
console.log(getPreco.apply(carro, [4899, 'R$']))