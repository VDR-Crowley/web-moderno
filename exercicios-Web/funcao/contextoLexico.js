const value = 'Global';

function printValue() {
  console.log(value);
}

function printDouble() {
  const value = 'Local';
  printValue();
}

printDouble();