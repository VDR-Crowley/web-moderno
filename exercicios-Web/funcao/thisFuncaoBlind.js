const pessoa = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao);
  }
};

pessoa.falar();

// pessoa2 recebe a referencia da função falar que não tem o contexto de saudacao
// retornando no console um valor indefinido
const pessoa2 = pessoa.falar;
pessoa2(); // conflito entre paradigmas: funcional e OO


// função bind() resolve esse tipo de problema com referencia no contexto do js
const pessoa3 = pessoa.falar.bind(pessoa);
pessoa3()