// função factory -- função fabrica é um padrão de projeto
// Uma função que retorna um objeto

// função factory simples

function newPessoa() {
  return {
    Nome:'Vando',
    Idade: 19
  }
}

console.log(newPessoa())