/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */
const fs = require('fs');

const writeableStream = fs.createWriteStream('./output.txt');

const readableStream = fs.createReadStream('./input.txt');

readableStream.on('readable', () => {
    try {
        writeableStream.write(readableStream.read());
    } catch(error) {

    }   
});

readableStream.on('end', () => {
    writeableStream.write('\n');
    writeableStream.end();
    console.log('Finish');
});