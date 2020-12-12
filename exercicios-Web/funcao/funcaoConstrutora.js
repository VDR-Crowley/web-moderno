// função no js funciona como uma class me outras linguagens
// instanciando metodos que poderão ser usado por essa função
function Carro(velocidadeMaxima = 220, delta=5) {
  // atributo privado
  let velocidadeAtual = 0;

  // metodo publico com this
  this.acelerar = () => {
    
    if(velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }

  }

  this.reduzirVelocidade = (frear = 5) => {
    velocidadeAtual == 0 ? 0 : velocidadeAtual -= frear;
  }


  this.parar = (parar = 0) => {
    return `O carro esta parado ${velocidadeAtual = parar}`
  }

  // metodo publico com this
  this.getVelocidadeAtual = () => {
    return velocidadeAtual;
  }
}

const uno = new Carro;
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.reduzirVelocidade();

console.log(uno.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof uno);