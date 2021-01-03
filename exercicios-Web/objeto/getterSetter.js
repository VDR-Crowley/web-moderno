const obj = {

  _valor: 1, // _  convenção
  _nome: 'Vando',

  get valor() { return this._valor++ },

  set valor(valor) { 
    if(valor > this._valor)
    this._valor = valor;
  }
};


console.log(obj.valor, obj.valor);

obj.valor = 1000;

console.log(obj.valor, obj.valor);