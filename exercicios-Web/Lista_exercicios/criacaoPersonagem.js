/*
criar uma função
que retorna um personagem
caracteriscas
poderes
*/

function caracteriscasFisicas(nome, idade, genero, porteFisico, corPele, corCabelo) {
  return {
    nome,
    idade,
    genero,
    porteFisico,
    corPele,
    corCabelo,
  }
}

let caracteristica = caracteriscasFisicas('Geralt', '19', 'Masculino', 'Sarado', 'Branco', 'Branco');

const personagemPrincipal = [ ];

personagemPrincipal.push(caracteristica);


console.log(personagemPrincipal[0]);
