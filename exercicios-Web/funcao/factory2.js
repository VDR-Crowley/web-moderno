function criaProduto(name, price) {
  return {
    nome: name,
    preco: price,
    desconto: 0.1
  }
}

console.log(criaProduto('Celular', 950))