function Rand( {min = 1, max = 100} ) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = { max: 50, min: 40 }

console.log(Rand(obj))
console.log(Rand({})) // parametro padrão