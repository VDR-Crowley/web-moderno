const nameOne = 'Vando';
const nameTwo = 'Vinicius';
const nameTree = 'Viviane';

const typeNames = {nameOne, nameTwo, nameTree};

console.log(typeNames);


const chave = 'Atribute';
const valor = 'value';
// usar variaveis com chave de um objeto
const obj = { [chave]: valor };

console.log(obj);


const obj2 = {
  printConsole(nome) {
    console.log(nome);
  }
}

obj2.printConsole('Rex');