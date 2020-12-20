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

let caracteristicaFisicas = caracteriscasFisicas('Geralt', '19', 'Masculino', 'Sarado', 'Branco', 'Branco');
const personagemPrincipal = [ ];
personagemPrincipal.push(caracteristicaFisicas);
console.log(personagemPrincipal[0]);

function criaAtributos() {

  this.roupas = (camisa, luvas, calsa, botas) => {
    return{ camisa, luvas, calsa, botas }
  }

}

const roupa = new criaAtributos();

let novoestilo = roupa.roupas(true, false, true, false);

console.log(novoestilo)
