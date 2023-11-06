const fs = require('fs');
const path = require('path');
const { Readable, Writable } = require('stream');

const inputFilePath = path.resolve(__dirname, 'input.txt');
const outputFilePath = path.resolve(__dirname, 'output.txt');

const readStream = fs.createReadStream(inputFilePath, { highWaterMark: 15 });
const writeStream = fs.createWriteStream(outputFilePath);

readStream.pipe(new Writable({
  write(chunk, encoding, callback) {
    const data = chunk.toString();
    writeStream.write(`${data}\n`);
    callback();
  },
}));

readStream.on('end', () => {
  writeStream.end();
  console.log('File has been written to output.txt');
});
