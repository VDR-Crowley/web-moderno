function invertName(nome) {
  
  let inverteString = nome.split('').reverse().join(' ');
  
  return inverteString;
}

console.log(invertName('vando'));


function inverteString(nome) {

  let invertido = '';

  for(let i = nome.length - 1; i >= 0; i--) {
    invertido += nome[i];
  }

  return invertido;
}

console.log(inverteString('Vinicius'))