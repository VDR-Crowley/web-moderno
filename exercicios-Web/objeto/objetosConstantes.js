// pessoa aponta -> para um endereço na memoria que armazena o objeto nome
const pessoa = {nome: 'Vando'};
pessoa.end = '67';
console.log(pessoa);
console.log(pessoa.nome);

// congela pessoa, não vai pode ser alterado
Object.freeze(pessoa);

delete pessoa.end;

console.log(pessoa);