/*
08)
​Pedro joga N jogos de basquete por temporada. Para saber como está ele está 
progredindo, ele mantém registro de todas as as pontuações feitas por jogo. 

Após cada jogo ele anota no novo valor e confere se omesmo é maior ou 
menor que seu melhor e pior desempenho. 
Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, 
escreva uma função que ao recebê-la irá comparar os valores um a um e 
irá retornar um vetor com o número 
de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu piorjogo.
(Número do pior jogo).
*/

let todasPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"


function comparaRendimento(todasPontuacoes) {
  let pontuacoes = todasPontuacoes.split(", ");
  let qtquebraRecords = 0;
  let piorJogo = 1;
  let maiorPontucao = pontuacoes[0];
  let menorPontucao = pontuacoes[0];

  for(let i = 1; i < pontuacoes.length; i++) {

    if(pontuacoes[i] > maiorPontucao) {
      maiorPontucao = pontuacoes[i];
      qtquebraRecords++;
    } else if(pontuacoes[i] < menorPontucao) {
      menorPontucao = pontuacoes[i];
      piorJogo = i + 1;
    }

  }

  return [qtquebraRecords, piorJogo];
}

console.log(comparaRendimento(todasPontuacoes));