// Usando notação literal
const obj = {};
console.log(obj);

// Objeto é uma função
console.log(typeof Object, typeof new Object());
const obj1 = new Object();
console.log(obj1);

// funções construtoras
function criaProduto(nome, preco, desconto) {
  this.nome = nome;
  this.getPriceComDesconto = () => {
    return (preco * (1 - desconto)).toFixed(2);
  }
}
const p1 = new criaProduto('caneta', 7.50, 0.10);
const p2 = new criaProduto('Notebook', 2499.99, 0.15);

console.log(p1.getPriceComDesconto());
console.log(p2.getPriceComDesconto());


// função factory 
function criaFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    }
  }
}

const f1 = criaFuncionario('Vando', 1200, 5) ;

console.log('Salario: '+f1.getSalario());


// Object.create

const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// uma função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "Sou um Json"}');
console.log(fromJSON.info);