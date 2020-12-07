/*
  Function de callback significa chamar de volta

  callback acontece quando uma função é disparada depois de um evento
*/

const fabricantes = ['BMW', 'Ford', 'Mercedes'];

function imprimir(nome, indice) {
  console.log(`${indice + 1} ${nome}`);
}

fabricantes.forEach(imprimir);

fabricantes.forEach(fabricante => console.log(fabricante));