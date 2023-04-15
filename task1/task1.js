const fs = require('fs');


const input = JSON.parse(fs.readFileSync('input.json'));


function canTransform(start, end) {

  while (start !== end) {

    if (end % 2 !== 0 || end / 2 < start) {
      end--;
    } else {

      end /= 2;
    }
  }

  return true;
}

const result = canTransform(input.startNumber, input.endNumber);

fs.writeFileSync('output.json', JSON.stringify({ canTransform: result }));
