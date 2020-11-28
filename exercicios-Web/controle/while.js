function getInteiroAleatorioEntra(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

while(opcao != -1) {
  opcao = getInteiroAleatorioEntra(-1, 50);
  console.log(`O número escolhido ${opcao}`);
}

console.log('Acabou')

// Neste caso fica claro que não tenho uma quantidade exata de repetoções
// Por isso o uso mais indicado é o while