function area(largura, altura) {
  const area = largura * altura;
  if(area > 20) {
    console.log('Area acima do permitido: '+ area);
  } else {
    return area;
  }
}

console.log(area(2, 2));
console.log(area(2)); // NaN
console.log(area())   // NaN
console.log(area(5, 5));