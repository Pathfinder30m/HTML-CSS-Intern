const fs = require('fs');

const input = JSON.parse(fs.readFileSync('input.json'));


function findDuplicate(arr) {

  for (let i = 0; i < arr.length; i++) {
    const absValue = Math.abs(arr[i]);

    if (arr[absValue] < 0) {
      return absValue;
    } else {
     
      arr[absValue] = -arr[absValue];
    }
  }

  return -1;
}


const result = findDuplicate(input.arr);


fs.writeFileSync('output.json', JSON.stringify({ duplicate: result }));
