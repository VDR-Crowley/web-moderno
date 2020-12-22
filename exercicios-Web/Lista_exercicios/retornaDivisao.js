function calculaDivisao(numeroOne, numeroTwo) {
  //const calcula = numeroOne / numeroTwo;
  return `Divisão: ${(numeroOne / numeroTwo).toFixed(2)}\nResto: ${numeroTwo % numeroOne}`;
}

console.log(calculaDivisao(4923, 30));
console.log(calculaDivisao(830, 4));
console.log(calculaDivisao(938, 58));

let num = 5250;
let num2 = 4;

console.log(`${num*num2}`)