const fs = require('fs');

const input = JSON.parse(fs.readFileSync('input.json'));

const availableSizes = {
  S: input.s,
  M: input.m,
  L: input.l,
  XL: input.xl,
  XXL: input.xxl,
  XXXL: input.xxxl,
};

let possible = true;
let solution = {};
for (let i = 0; i < input.participants.length; i++) {
  const size = input.participants[i].size;
  if (availableSizes[size] > 0) {

    solution[i] = size;
    availableSizes[size]--;
  } else if (size === 'S' || size === 'XXXL') {

    possible = false;
    break;
  } else if (size === 'M' || size === 'L') {

    const nextSize = size === 'M' ? 'L' : 'XL';
    if (availableSizes[nextSize] > 0) {
      solution[i] = nextSize;
      availableSizes[nextSize]--;
    } else {
      possible = false;
      break;
    }
  } else if (size === 'XL' || size === 'XXL') {

    const prevSize = size === 'XL' ? 'L' : 'XL';
    if (availableSizes[prevSize] > 0) {
      solution[i] = prevSize;
      availableSizes[prevSize]--;
    } else {
      possible = false;
      break;
    }
  }
}

fs.writeFileSync('output.json', JSON.stringify({ possible, solution }));
