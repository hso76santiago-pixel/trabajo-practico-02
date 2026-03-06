import path from  'path' ;
// definir una ruta de un archivo ejemplo//
const filepath = `./data/example.txt`;

//obtner información del directorio base//
const dirname= path.dirname (filepath)
console.log(`directorio base:`, dirname )

// obtener información del archivo sin extencion //

const basename = path.basename(filepath, '.txt');

// obtener informacion del archvivo// 

const extname = path.extname(filepath)

console.log (`extencion del archivo`, extname);

// crear  una ruta unida//

const newPath = path.join (`/user`, `docs`, `newfile.txt` );
console.log(`nueva ruta:`,newPath);