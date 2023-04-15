const fs = require('fs');

// Зчитування вхідного файлу
const input = JSON.parse(fs.readFileSync('input.json'));

const n = input.n;
const m = input.m;
const scene = input.scene;

let count = 0;

// Перебір кожної клітинки театральної сцени
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    // Перевірка, що клітина порожня і можна встановити прожектор
    if (scene[i][j] === 0) {
      // Перевірка можливості встановлення прожектора вгору
      if (i > 0 && scene[i - 1][j] === 1) {
        count++;
        continue;
      }
      // Перевірка можливості встановлення прожектора вправо
      if (j < m - 1 && scene[i][j + 1] === 1) {
        count++;
        continue;
      }
      // Перевірка можливості встановлення прожектора донизу
      if (i < n - 1 && scene[i + 1][j] === 1) {
        count++;
        continue;
      }
      // Перевірка можливості встановлення прожектора ліворуч
      if (j > 0 && scene[i][j - 1] === 1) {
        count++;
      }
    }
  }
}

// Запис відповіді в вихідний файл
fs.writeFileSync('output.json', JSON.stringify({count}));
