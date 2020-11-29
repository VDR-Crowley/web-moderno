function soma() {
  let soma = 0;
  for(let i in arguments) {
    soma += arguments[i];
  }
  return soma;
}

console.log(soma(2));
console.log(soma(5, 8));
console.log(soma(1.2, 2.4, 5.2));