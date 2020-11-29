const number = new Array(2.5, 8.5, 5, 8, 9);
for(let i in number) {
  console.log(i, number[i]);
}

const pessoa = {
  nome:'Vando',
  sobrenome: 'Reis',
  Telefone: 58963211
}

for(let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
}