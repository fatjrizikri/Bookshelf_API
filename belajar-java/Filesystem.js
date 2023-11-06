// const fs = require('fs');
 
// const fileReadCallback = (error, data) => {
//     if(error) {
//         console.log('Gagal membaca berkas');
//         return;
//     }
//     console.log(data);
// };
 
// fs.readFile('todo.txt', 'UTF-8', fileReadCallback);

// Sebagai alternatif, juga bisa gunakan method versi synchronous fs.readFileSync()
// const fs = require('fs');
 
// const data = fs.readFileSync('todo.txt', 'UTF-8');
// console.log(data);

const fs = require('fs');
const path = require('path');

// TODO: Tampilkan teks pada notes.txt pada console.
const filePath = path.resolve(__dirname, 'todo.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err}`);
  } else {
    console.log(data);
  }
});