function seForVerdade(valor) {
  if(valor) {
    console.log('Verdade...'+ valor);
  }
}

// Falso
seForVerdade();
seForVerdade(null);
seForVerdade(undefined);
seForVerdade(NaN);
seForVerdade('');
seForVerdade(0);
// Verdadeiro
seForVerdade(-1);
seForVerdade(' ');
seForVerdade('?');
seForVerdade([]);
seForVerdade([1, 2]);
seForVerdade({})