
import fs from 'fs';

// escribir un archivo de manera asincronica//
fs.writeFile('../data/newfile.txt', 'contenido nuevo' , (err, data) =>{
    if (err) throw err;
    console.log('archivo creado y escrito');

});