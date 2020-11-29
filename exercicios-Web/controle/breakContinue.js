const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i in number) {
  if( i == 5) {
    break;  // Para o fluxo do codigo no indice 5
  }
  console.log(`Indice: ${i} Valor = ${number[i]}`);
}

console.log('\n\n');

for(let i = 0; i < number.length; i++) {
  if(i == 5) {
    continue;  // Vai pular o indice 5
  }
  console.log(`Indice: ${i} Valor = ${number[i]}`);
}

// Rotulo no for primary
// Não recomendavel esse uso, não estruturado
// Não organizado, lembrando a era go tue
externo: for(let a in number) {
  for(let b in number) {
    if(a == 4 && b == 7) {
      break externo;
    }
    console.log(`Par ${a},${b}`);
  }
}

console.log('Fim')