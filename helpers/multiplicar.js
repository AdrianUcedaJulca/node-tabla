const fs = require('fs')
const cl = require('colors');

const multiplicarBase = async(base = 1, hasta, listar) => {

    try {

        let nameFile = `Tabla- ${base}`;
        let consola = '', content = '';
        for (let index = 1; index <= hasta; index++) {

            let result = base * index;

            content += `${base} x ${index} = ${ result } \n`
            // content += base.toString().green + ' x '.gray + index + ' = '.blue + result + '\n'
            consola += `${base} ${'x'.gray} ${index} ${'='.blue} ${ result } \n`
        }
        
        fs.writeFileSync('./salida/' + nameFile + '.txt', content);

        if(listar) console.log(consola);

        return nameFile;
    } catch (error) {
        throw error
    }
}


module.exports ={
    multiplicarBase
};