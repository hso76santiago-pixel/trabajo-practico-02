
import fs from 'fs';

// renombrar un archivo//
fs.rename('../data/newfile.txt', '../data/renamefile.txt', (err, data) =>{
    if (err) throw err;
    console.log('archivo renombrado');

});