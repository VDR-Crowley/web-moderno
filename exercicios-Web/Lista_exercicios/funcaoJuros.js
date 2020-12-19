/*
06)​ Elabore duas funções que recebem três parâmetros: 
capital inicial, taxa de juros e tempo de aplicação. 
Aprimeira função retornará o montante da aplicação financeira 
sob o regime de juros simples e a segunda retornará 
o valor da aplicação sob o regime de juros compostos
*/

//montante é o valor acumulado

function jurosSimples(capInicial, taxaJuros, tempoAplicacao) {
  taxaJuros = taxaJuros / 100;
  const montante = capInicial + (capInicial * taxaJuros * tempoAplicacao);
  const total = montante.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
  return `O valor total a ser pago: ${total}`;
 
}

function jurosCompostos(capInicial, taxaJuros, tempoAplicacao) {
  taxaJuros = taxaJuros / 100;
  const montante = capInicial * (1 + taxaJuros) ** tempoAplicacao;
  const total = montante.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
  return `O valor total a ser pago: ${total}`;
}

console.log(jurosSimples(100, 10, 2));
console.log(jurosCompostos(100, 10, 2))