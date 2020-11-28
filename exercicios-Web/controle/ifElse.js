function imprimirResultado(nota) {
  if(parseInt(nota) >= 7)
    console.log('Aprovado');
  
    else if(nota <= 7)
    console.log('Reprovado'); 
  
    else
    console.log('Number not reconhecido')
}

imprimirResultado(7);
imprimirResultado(6);
imprimirResultado('oi');