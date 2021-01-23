const Person = {
  name: "Vando",
  age: 19,
  Weight: 95
};

// return to chaves
console.log(Object.keys(Person));
// return to values
console.log(Object.values(Person));

// return a array with sub-array with 2 indice
console.log(Object.entries(Person));

console.log(Object.entries(Person)[0]);

Object.entries(Person).forEach( (element) => {
  console.log(`Key:${element[0]} Value: ${element[1]}`);
});


// new property to object person

Object.defineProperty(Person, 'dataBirth', {
  enumerable: false,   // não enumerável
  configurable: false, // não configurável
  writable: false,     // não gravável
  value: '04/04/2001'
});

Person.dataBirth = "04/05/2018";
console.log(Person);

console.log(Person.dataBirth);
console.log(Object.keys(Person));


Object.freeze(Person);

Person.dataBirth = '02/08/1990';

console.log(Person);


const destiny =  { a:5 };
const objOne = { b:2, c:8 };
const objTwo = { d:3, a:7 }; 

Object.assign(destiny, objOne, objTwo);
console.log(destiny);