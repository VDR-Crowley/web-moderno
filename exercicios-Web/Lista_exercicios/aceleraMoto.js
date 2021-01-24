const motorcycle = {
  model: 'ZB 180', 
  brand: 'Honda',
  wheel: 4,
  yearOfManufacture: '2020',
  
  turnOn(key) {
    key == true ? console.log('motorcycle on!') : console.log('motorcycle off!');
  },

  speedsUp(key, speeds) {
    if(key == true) {
      speedsUp += 10
      return `Speed in: ${speeds}`;
    } else {
      return "Ops: motorcycle off";
    }    
  }
}
let key = true;
let speedsUp = 10;



motorcycle.turnOn(key);

console.log(motorcycle.speedsUp(key, speedsUp));
console.log(motorcycle.speedsUp(key, speedsUp));
console.log(motorcycle.speedsUp(key, speedsUp));