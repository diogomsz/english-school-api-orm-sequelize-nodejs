const Services = require('./Services');
const database = require('../models');

class PessoasServices extends Services {
    constructor() {
        super('Pessoas');
    }

    async pegaRegistrosAtivos(where = {}) {
        return await database[this.nomeDoModelo].findAll({  where: { ...where } });
    }

    async pegaTodosOsRegistros(where = {}) {
        return await database[this.nomeDoModelo].scope('todos').findAll({  where: { ...where } });
    }

    // métodos específicos do controlador de Pessoas
}

module.exports = PessoasServices;
