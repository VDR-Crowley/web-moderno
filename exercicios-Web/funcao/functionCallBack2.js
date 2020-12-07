const notas = [7.8, 5.6, 8.9, 2.3];

// sem callback
const notasBaixa1 = []
for(let i in notas) {
  if(notas[i] < 7) {
    notasBaixa1.push(notas[i]);
  }
}

console.log(notasBaixa1);

// Com callback
const notasBaixa2 = notas.filter(function(nota) {
  return nota < 7;
});
console.log(notasBaixa2);

// forma mais reduzida do callback
const notasBaixa3 = notas.filter(nota => nota < 7);
console.log(notasBaixa3);