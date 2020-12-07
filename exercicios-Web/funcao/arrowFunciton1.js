/*
  No ES6 de 2015 foi instroduzido um novo tipo de função
  Arrow function
  Objetos dela é ter uma sintaxe mais injuta e ter um this
  adicionado ao contexto em que a função foi inscrita
  Function arrow vai ser sempre uma função anonima
*/ 

function Pessoa()  {
  this.idade = 0;

  setInterval( () => {
    this.idade++
    console.log(this.idade);
  }, 1000);
}

new Pessoa