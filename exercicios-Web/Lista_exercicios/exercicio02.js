/*
  02)
  ​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
  Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. 
  Escaleno: Todos os lados são diferentes.

  Crie uma função que recebe os comprimentos dos três lados de um triângulo e 
  retorne sua classificação quanto ao tamanho de seus lados. 
  (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
  triângulo).
*/

function getLadosTriangulos(pontaOne, pontaTwo, pontaTree) {
  const trianguloEquilatero = `Triangulo Equilatero: Todos os lados são iguais.`;
  const trianguloEscaleno = ` Triangulo Escaleno: Os lados são diferentes.`;

  if(pontaOne == pontaTwo && pontaTwo == pontaTree && pontaTree == pontaOne) {
    return trianguloEquilatero;
  } else {
    return trianguloEscaleno;
  }
}

const triagunlo = getLadosTriangulos(2.5, 2.5, 2.5);
console.log(triagunlo);