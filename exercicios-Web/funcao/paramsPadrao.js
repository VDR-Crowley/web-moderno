// Estrategia 1 para gerar um valor padrão
function soma1(a, b, c) {
  a = a || 1
  b = b || 1
  c = c || 1
  return a + b + c
}

console.log(soma1(4), soma1(), soma1(4, 4, 4), soma1(0, 0, 0))

// Estrategia 2, 3 e 4 para gerar um valor padrão
function soma2(a, b, c) {
  a = a !== undefined ? a : 1
  b = 1 in arguments ? b : 1 
  c = isNaN(c) ? 1 : c
  return a + b + c
}

console.log(soma2(5), soma2(), soma2(8, 5, 5), soma2(0, 0, 0))

// valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c
}

console.log(soma3(), soma3(4, 5))