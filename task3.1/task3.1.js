
const input = require('./input.json');

const plates = [0.5, 1, 2.5, 5, 10, 15, 20, 25]; //кг
const lbPlates = [10, 25, 35, 45]; // lbs
const lbToKg = 0.453592; // lbs в кг
const barWeight = 20; 
const maxRecord = input.maxRecord; 


const convertLbToKg = (lb) => lb * lbToKg;


const allPlates = plates.concat(lbPlates.map(convertLbToKg));
const combos = [[]];
for (let i = 0; i < allPlates.length; i++) {
  const currentCombos = [...combos];
  for (let j = 0; j < currentCombos.length; j++) {
    const newCombo = currentCombos[j].concat(allPlates[i]);
    if (newCombo.reduce((a, b) => a + b, barWeight) <= 140 && newCombo.length <= 24) {
      combos.push(newCombo);
    }
  }
}


let minWeight = Infinity;
for (let i = 0; i < combos.length; i++) {
  const weight = combos[i].reduce((a, b) => a + b, barWeight);
  if (weight > maxRecord && weight < minWeight) {
    minWeight = weight;
  }
}


const output = { minWeight };
require('fs').writeFileSync('output.json', JSON.stringify(output));
