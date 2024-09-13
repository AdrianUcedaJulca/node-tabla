const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es el número base de la tabla'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: false,
                    default: 12,
                    describe: 'Número hasta donde se desea la tabla'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false,
                    default: false,
                    describe: 'Mostrar en consola'
                })
                .check( (argv, options) =>{
                    if( isNaN(argv.b))
                        throw 'La base tiene que ser un número'
                    if( isNaN(argv.h))
                        throw 'El limite debe se un número'
                    return true;
                })
                .argv;

module.exports = {
    argv
}