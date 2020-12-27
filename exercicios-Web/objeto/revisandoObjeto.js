// coleção dinâmica de pares chave/valor
const produto = new Object();
produto.nome = 'cadeira';
produto['marca do produto'] = 'generico';
produto.preco = 250;

console.log(produto);

delete produto.preco;
delete produto['marca do produto'];

console.log(produto);

const carro = { 
  modelo: 'A4',
  valor: 99886,
  proprietario: {
    nome: 'Junior',
    idade: 19,
    endereco: {
      numero: 6
    }
  },

  construtores: [{
    nome: 'Ana',
    idade: 30
  }, {
    nome: 'Carlos',
    idade: 40
  }],

  calculaValor: function() {
    //....
  }

}

// maneira de acessar os objetos
carro.proprietario.endereco.numero = 66;

carro['proprietario']['endereco']['numero'] = 666;

console.log(carro['construtores'][1]);

delete carro.calculaValor;

console.log(carro);