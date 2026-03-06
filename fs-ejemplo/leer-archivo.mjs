
import fs from 'fs';

// leer un archivo de manera asincronica//
fs.readFile('../data/example.txt', 'utf-8', (err, data) =>{
    if (err) throw err;
    console.log(data);

});