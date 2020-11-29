// Função em JS é First-Class Object (Citizens)
// Higher-order function (função de alta ordem)
// Cidadão de primeira linha é quando a linguagem trata a função como dado


// Criar de forma literal
function func1() { }


// Armazenar em uma variavel
const func2 = function() { }


// Armazenar em um array
const array = [function(a, b) {return a + b}, func1, func2];
console.log(array[0](2, 3));


// Armazenar em um objeto
const obj =  {}
obj.falar = function() { return 'Opa'}
console.log(obj.falar());


// Passar função como parametro
function run(fun) {
  fun()
}

run(function() { console.log( 'Executando...' ) });


// Uma função pode retornar/conter uma função
function soma(a, b) {
  return function(c) {
    console.log(a + b + c);
  }
}

soma(4, 5)(5); // Chama as funções
// Outra forma de chamar as funções
const noveMais = soma(4, 5);
noveMais(8);