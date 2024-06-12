// TODO: tampilkan teks pada notes.txt pada console.
// const fs = require('fs');

// const data = fs.readFileSync('notes.txt', 'UTF-8');
// console.log(data);

const fs = require('fs');

const fileCallback = (error, data) => {
    if (error) {
        console.log('Gagal membaca data:', error);
        return;
    }
    console.log(data);
}

fs.readFile('notes.txt', 'UTF-8', fileCallback)