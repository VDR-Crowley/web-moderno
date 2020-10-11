const school = 'cod3r'

console.log(school.charAt(2)) // pega o caractere
console.log(school.charAt(5)) // Vai retorna um space
console.log(school.charCodeAt(3)) // retorna um numero unicode

console.log(school.indexOf('o')) // retorna a posicao

console.log(school.substring(1)) // imprime letras apartir da posicao 1
console.log(school.substring(0, 3)) // imprime ate o 3 e oculta a letra da posicao 3

console.log('Escola'.concat(school).concat('!')) // concatena as strings

console.log(school.replace(3, 'e')) // substitui as strings

console.log('vando,vinicius,viviane'.split(',')) // Vai gerar um array