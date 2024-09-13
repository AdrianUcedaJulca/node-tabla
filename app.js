const { multiplicarBase } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs')

console.clear();

//const base = 2;
// console.log(argv.b, argv.l);

multiplicarBase(argv.b, argv.h,  argv.l)
    .then( nameFile => console.log(nameFile, 'Creado'))
    .catch( err=> console.log(err));