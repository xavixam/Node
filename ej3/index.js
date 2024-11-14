const Logger = require('logplease');
const numeros = require('./numeros');

const logger = Logger.create('utils');

function comprobar (a) {
    if (numeros.esPar(a) == true) {
        logger.info(`El número es par`);
    } else {
        logger.error(`El número no es par`);
    }
}

comprobar(2)
comprobar(3)
comprobar(101)
comprobar(201)
comprobar(202)
comprobar(100)