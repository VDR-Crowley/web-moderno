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


// função bind() resolve esse tipo de conflito
// bind recebe um objeto com argumento no qual vc queira
// que seja resolvido o this
// o bind é o metodo responsavel por amarrar o objeto dono da execução no momento
// o bind retorna outra função que vai amarrar o objeto this
const pessoa3 = pessoa.falar.bind(pessoa);
pessoa3()